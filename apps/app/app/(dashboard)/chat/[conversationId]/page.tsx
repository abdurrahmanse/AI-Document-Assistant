"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from '@workspace/ui/components/ui'
import { ChatInterface } from "@/components/chat/ChatInterface"

export default function ChatSessionPage({ params }: { params: Promise<{ conversationId: string }> }) {
  const router = useRouter()
  // React 19 / Next 15 pattern for unrolling promises in params
  const { conversationId } = use(params)

  return (
    <div className="w-full max-w-4xl mx-auto py-6 flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <Button variant="ghost" size="icon" onClick={() => router.push("/chat")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold tracking-tight">Chat Session</h1>
      </div>

      <div className="flex-1 min-h-0">
        <ChatInterface conversationId={conversationId} />
      </div>
    </div>
  )
}
