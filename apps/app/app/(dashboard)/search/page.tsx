"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useQuery } from "@tanstack/react-query"
import { useApi } from "@/hooks/use-api"
import { SearchResult } from "@workspace/api-client"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const api = useApi()

  const { data: results, isLoading, isError, error } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: async () => {
      if (!searchQuery) return []
      return api.search.searchDocuments({ query: searchQuery })
    },
    enabled: !!searchQuery,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(query)
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Semantic Search</h1>
        <p className="text-muted-foreground mt-2">
          Search across all your uploaded documents using hybrid vector retrieval.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Ask a question or search for concepts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : <><Search className="w-4 h-4 mr-2" /> Search</>}
        </Button>
      </form>

      {isError && (
        <div className="p-4 bg-red-100 text-red-800 rounded-md">
          <p>Failed to search: {(error as Error).message}</p>
        </div>
      )}

      {results && results.length === 0 && searchQuery && !isLoading && (
        <div className="p-8 text-center text-muted-foreground border rounded-lg">
          No results found for "{searchQuery}". Try rephrasing your search.
        </div>
      )}

      <div className="space-y-4">
        {results?.map((result: SearchResult) => (
          <div key={result.chunk_id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">
                Document Context
              </div>
              <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Score: {result.relevance_score.toFixed(3)}
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">
              ...{result.content}...
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
