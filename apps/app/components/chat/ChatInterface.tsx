"use client";

import { useEffect, useState, useRef } from "react";
import { useApi } from "@/hooks/use-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";
import { MessageList } from "./MessageList";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatInterfaceProps {
  conversationId: string;
}

export function ChatInterface({ conversationId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const api = useApi();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const assistantMessageId = `assistant-${Date.now()}`;
    setMessages((prev) => [...prev, { id: assistantMessageId, role: "assistant", content: "" }]);

    try {
      const token = api.config.getToken ? api.config.getToken() : null;
      
      const response = await fetch(api.chat.getChatStreamUrl(conversationId), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let assistantContent = "";
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter(line => line.trim() !== "");
          
          for (const line of lines) {
            try {
              const data = JSON.parse(line);
              if (data.error) {
                console.error("Stream error:", data.error);
                continue;
              }
              if (data.content) {
                assistantContent += data.content;
                setMessages((prev) => 
                  prev.map(msg => msg.id === assistantMessageId ? { ...msg, content: assistantContent } : msg)
                );
              }
            } catch (e) {
              console.error("Failed to parse chunk", e, line);
            }
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => 
        prev.map(msg => msg.id === assistantMessageId ? { ...msg, content: "Sorry, an error occurred while generating the response." } : msg)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] min-h-[500px] border rounded-xl overflow-hidden bg-background shadow-sm">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t bg-muted/30">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your documents..."
            className="flex-1"
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
