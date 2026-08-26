import uuid
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession
from openai import AsyncOpenAI
from loguru import logger
import json

from app.core.config import settings
from app.domains.conversations.repositories.postgres import ConversationRepository, MessageRepository
from app.domains.search.services.search import SearchService
from app.infrastructure.db.models.message import MessageRole

class ChatEngine:
    def __init__(self, session: AsyncSession):
        self.session = session
        self.conversation_repo = ConversationRepository(session)
        self.message_repo = MessageRepository(session)
        self.search_service = SearchService(session)
        self.client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = "gpt-4o-mini"

    async def stream_chat(self, user_id: uuid.UUID, conversation_id: uuid.UUID, message: str) -> AsyncGenerator[str, None]:
        """
        Handles the RAG lifecycle: Retrieval, LLM invocation, and Streaming.
        """
        # 1. Ensure conversation exists and user owns it
        conversation = await self.conversation_repo.get_by_id(conversation_id, user_id)
        if not conversation:
            raise ValueError("Conversation not found or access denied.")

        # 2. Persist the user message
        await self.message_repo.add_message(conversation_id, MessageRole.USER, message)
        await self.session.commit()

        # 3. Retrieve relevant context
        # Perform hybrid search across the user's documents
        search_results = await self.search_service.hybrid_search(
            query=message,
            user_id=user_id,
            limit=5
        )

        context_blocks = []
        for res in search_results:
            context_blocks.append(f"---\nDocument Context:\n{res.content}\n---")
            
        context_str = "\n".join(context_blocks) if context_blocks else "No specific document context found."

        # 4. Construct Prompt
        system_prompt = (
            "You are an AI Document Assistant. You answer questions based ONLY on the provided Document Context. "
            "If the answer is not in the context, explicitly say so. Do not hallucinate."
            f"\n\nContext:\n{context_str}"
        )
        
        # Build history
        messages = [{"role": "system", "content": system_prompt}]
        
        # We can add history here up to a limit
        for msg in conversation.messages[-10:]:
            messages.append({"role": msg.role.value, "content": msg.content})

        # 5. Call LLM with streaming
        logger.info(f"Invoking LLM for conversation {conversation_id}")
        
        full_response = ""
        
        if not settings.OPENAI_API_KEY:
            # Fallback if no API key is provided
            fallback_msg = "Mock response: OPENAI_API_KEY is not configured. Context retrieved successfully."
            yield json.dumps({"content": fallback_msg}) + "\n"
            full_response = fallback_msg
        else:
            try:
                stream = await self.client.chat.completions.create(
                    model=self.model,
                    messages=messages, # type: ignore
                    stream=True,
                )
                
                async for chunk in stream:
                    content = chunk.choices[0].delta.content
                    if content:
                        full_response += content
                        # SSE requires data: format, but often JSON lines is easier for standard fetch clients
                        # We will yield JSON objects separated by newlines
                        yield json.dumps({"content": content}) + "\n"
                        
            except Exception as e:
                logger.error(f"LLM streaming failed: {e}")
                yield json.dumps({"error": "Failed to generate response"}) + "\n"
                return

        # 6. Persist Assistant Message
        await self.message_repo.add_message(conversation_id, MessageRole.ASSISTANT, full_response)
        await self.session.commit()
