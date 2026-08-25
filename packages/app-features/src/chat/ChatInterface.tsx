"use client";

import { useEffect, useState } from "react";
import { chatRepository } from "@workspace/data";
import { ChatSession } from "@workspace/types";
import { MessageList } from "./MessageList";
import { Button } from "@workspace/ui/components/ui";

export function ChatInterface() {
  const [session, setSession] = useState<ChatSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const data = await chatRepository.getSession("1");
        setSession(data);
      } catch (err) {
        console.error("Failed to load chat session", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !session) return;
    
    // Optimistic update
    const newMessage = {
      id: `user-${Date.now()}`,
      role: "user" as const,
      content: input,
      createdAt: new Date().toISOString(),
    };
    
    setSession({
      ...session,
      messages: [...session.messages, newMessage],
    });
    
    setInput("");

    try {
      const response = await chatRepository.sendMessage(session.id, newMessage.content);
      setSession((prev: ChatSession | null) => prev ? {
        ...prev,
        messages: [...prev.messages, response],
      } : prev);
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  if (loading) return <div>Loading chat...</div>;
  if (!session) return <div>No active session</div>;

  return (
    <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden bg-background">
      <div className="p-4 border-b bg-muted/20">
        <h2 className="font-semibold">{session.title}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <MessageList messages={session.messages} />
      </div>
      
      <div className="p-4 border-t flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your documents..."
          className="flex-1 px-3 py-2 border rounded-md"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}
