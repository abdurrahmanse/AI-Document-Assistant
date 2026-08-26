import type { ApiClient } from "../client";

export interface Conversation {
  id: string;
  title: string;
}

export class ChatModule {
  constructor(private client: ApiClient) {}

  async listConversations(): Promise<Conversation[]> {
    const response = await this.client.axios.get<Conversation[]>("/conversations");
    return response.data;
  }

  async createConversation(): Promise<Conversation> {
    const response = await this.client.axios.post<Conversation>("/conversations");
    return response.data;
  }

  async deleteConversation(id: string): Promise<void> {
    await this.client.axios.delete(`/conversations/${id}`);
  }

  // Note: sending a message is usually a streaming response, which axios doesn't handle natively 
  // as well as `fetch` for SSE/ndjson. The frontend components should probably use raw fetch for streaming.
  // But we can expose a helper method that returns the native fetch Response or a custom async generator.
  
  getChatStreamUrl(conversationId: string): string {
    return `${this.client.baseUrl}/conversations/${conversationId}/messages`;
  }
}
