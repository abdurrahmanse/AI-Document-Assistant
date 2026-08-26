import type { ApiClient } from "../client";

export interface SearchRequest {
  query: string;
  document_ids?: string[];
  limit?: number;
}

export interface SearchResult {
  chunk_id: string;
  document_id: string;
  content: string;
  metadata: Record<string, any>;
  relevance_score: number;
}

export class SearchModule {
  constructor(private client: ApiClient) {}

  async searchDocuments(request: SearchRequest): Promise<SearchResult[]> {
    const response = await this.client.axios.post<SearchResult[]>("/search", request);
    return response.data;
  }
}
