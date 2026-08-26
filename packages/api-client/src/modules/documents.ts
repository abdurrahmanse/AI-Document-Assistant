import type { ApiClient } from "../client";

export interface Document {
  id: string;
  title: string;
  filename: string;
  mime_type: string;
  size_bytes: number;
  status: 'UPLOADING' | 'QUEUED' | 'PROCESSING' | 'READY' | 'FAILED';
  created_at?: string;
}

export class DocumentsModule {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  async getDocuments(): Promise<Document[]> {
    const res = await this.client.axios.get<Document[]>("/documents/");
    return res.data;
  }

  async getDocument(id: string): Promise<Document> {
    const res = await this.client.axios.get<Document>(`/documents/${id}`);
    return res.data;
  }

  async uploadDocument(file: File, onUploadProgress?: (progressEvent: any) => void): Promise<Document> {
    const formData = new FormData();
    formData.append("file", file);
    
    const res = await this.client.axios.post<Document>("/documents/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
    
    return res.data;
  }

  async getDownloadUrl(id: string): Promise<{ url: string }> {
    const res = await this.client.axios.get<{ url: string }>(`/documents/${id}/download`);
    return res.data;
  }

  async deleteDocument(id: string): Promise<{ message: string }> {
    const res = await this.client.axios.delete<{ message: string }>(`/documents/${id}`);
    return res.data;
  }
}
