import uuid
from datetime import UTC, datetime

# Mock Data
from typing import Any
chat_sessions: list[dict[str, Any]] = [
    {
        "id": "1",
        "title": "Project Alpha Planning",
        "updatedAt": datetime.now(UTC).isoformat(),
        "messages": [
            {
                "id": "m1",
                "role": "user",
                "content": "Can you summarize the Q3 report?",
                "createdAt": datetime.now(UTC).isoformat(),
            },
            {
                "id": "m2",
                "role": "assistant",
                "content": "The Q3 report shows a 20% increase in user engagement.",
                "createdAt": datetime.now(UTC).isoformat(),
            },
        ],
    }
]

class ChatSessionService:
    async def get_sessions(self) -> list:
        return chat_sessions

    async def get_session(self, session_id: str) -> dict | None:
        return next((s for s in chat_sessions if s["id"] == session_id), None)

    async def add_message(self, session_id: str, content: str) -> dict | None:
        session = next((s for s in chat_sessions if s["id"] == session_id), None)
        if not session:
            return None
            
        user_msg = {
            "id": f"u-{uuid.uuid4()}",
            "role": "user",
            "content": content,
            "createdAt": datetime.now(UTC).isoformat(),
        }
        session["messages"].append(user_msg)
        
        bot_msg = {
            "id": f"a-{uuid.uuid4()}",
            "role": "assistant",
            "content": f"I received your message: '{content}'. This is a mock response from the backend.",
            "createdAt": datetime.now(UTC).isoformat(),
        }
        session["messages"].append(bot_msg)
        
        return bot_msg
