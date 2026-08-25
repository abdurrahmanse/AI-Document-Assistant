import { Message } from "@workspace/types";

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
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser 
            ? "bg-primary text-primary-foreground rounded-tr-sm" 
            : "bg-muted text-foreground rounded-tl-sm"
        }`}
      >
        <div className="text-sm">{message.content}</div>
        <div className="text-[10px] opacity-70 mt-1 text-right">
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}
