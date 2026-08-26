import { ChatSession, Message } from "@workspace/types";
import { axiosInstance } from "../../api/client";

export interface IChatRepository {
  getSessions(): Promise<ChatSession[]>;
  getSession(id: string): Promise<ChatSession>;
  sendMessage(sessionId: string, content: string): Promise<Message>;
}

export class ChatRepository implements IChatRepository {
  async getSessions(): Promise<ChatSession[]> {
    const res = await axiosInstance.get<ChatSession[]>("/api/app/chat/sessions");
    return res.data;
  }

  async getSession(id: string): Promise<ChatSession> {
    const res = await axiosInstance.get<ChatSession>(`/api/app/chat/sessions/${id}`);
    return res.data;
  }

  async sendMessage(sessionId: string, content: string): Promise<Message> {
    const res = await axiosInstance.post<Message>(`/api/app/chat/sessions/${sessionId}/messages`, {
      content,
    });
    return res.data;
  }
}

export class ChatMockRepository implements IChatRepository {
  async getSessions(): Promise<ChatSession[]> {
    return [
      {
        id: "1",
        title: "Project Alpha Planning",
        updatedAt: new Date().toISOString(),
        messages: [],
      },
    ];
  }

  async getSession(id: string): Promise<ChatSession> {
    return {
      id,
      title: "Project Alpha Planning",
      updatedAt: new Date().toISOString(),
      messages: [
        {
          id: "m1",
          role: "user",
          content: "Can you summarize the Q3 report?",
          createdAt: new Date().toISOString(),
        },
        {
          id: "m2",
          role: "assistant",
          content: "The Q3 report shows a 20% increase in user engagement.",
          createdAt: new Date().toISOString(),
        },
      ],
    };
  }

  async sendMessage(sessionId: string, content: string): Promise<Message> {
    return {
      id: `m-${Date.now()}`,
      role: "assistant",
      content: `This is a mock response from the AI. (Session: ${sessionId}, You said: ${content})`,
      createdAt: new Date().toISOString(),
    };
  }
}

export const chatRepository = new ChatMockRepository();
