"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useApi } from "@/hooks/use-api"
import { Button } from '@workspace/ui/components/ui'
import { MessageSquarePlus, MessageSquare, Loader2 } from "lucide-react"

export default function ChatMainPage() {
  const [conversations, setConversations] = useState<{id: string, title: string}[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const api = useApi()
  const router = useRouter()

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await api.chat.listConversations()
        setConversations(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchConversations()
  }, [api])

  const handleCreateChat = async () => {
    setCreating(true)
    try {
      const conv = await api.chat.createConversation()
      router.push(`/chat/${conv.id}`)
    } catch (e) {
      console.error(e)
      setCreating(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Chat</h1>
          <p className="text-muted-foreground mt-2">Chat with your uploaded documents.</p>
        </div>
        <Button onClick={handleCreateChat} disabled={creating}>
          {creating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessageSquarePlus className="mr-2 h-4 w-4" />}
          New Chat
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="animate-spin text-muted-foreground" /></div>
      ) : conversations.length === 0 ? (
        <div className="text-center py-24 border rounded-xl border-dashed">
          <p className="text-muted-foreground mb-4">No conversations yet.</p>
          <Button variant="outline" onClick={handleCreateChat} disabled={creating}>Start your first chat</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              onClick={() => router.push(`/chat/${conv.id}`)}
              className="p-6 border rounded-xl hover:border-primary hover:shadow-sm cursor-pointer transition-all bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-semibold truncate">{conv.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
