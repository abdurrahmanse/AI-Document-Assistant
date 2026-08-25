import { type Metadata } from "next";
import { ChatInterface } from "@workspace/app-features";

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat with your AI assistant about your documents",
};

export default function Page() {
  return (
    <div className="w-full max-w-7xl mx-auto py-6">
      <ChatInterface />
    </div>
  );
}
