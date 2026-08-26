interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

export function MessageList({ messages }: { messages: Message[] }) {
  if (messages.length === 0) {
    return <div className="text-center text-muted-foreground py-8">No messages yet. Start chatting!</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div 
        className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
          isUser 
            ? "bg-primary text-primary-foreground rounded-tr-sm" 
            : "bg-muted text-foreground rounded-tl-sm border"
        }`}
      >
        <div className="text-[15px] leading-relaxed whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
}
