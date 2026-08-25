import { Document } from "@workspace/types";
import { apiClient } from "../../api/client";

export interface IDocumentRepository {
  getDocuments(): Promise<Document[]>;
  uploadDocument(file: File): Promise<Document>;
}

export class DocumentRepository implements IDocumentRepository {
  async getDocuments(): Promise<Document[]> {
    return await apiClient.get<Document[]>("/api/app/documents");
  }

  async uploadDocument(file: File): Promise<Document> {
    // Usually uses FormData, but keeping simple for this mock
    const formData = new FormData();
    formData.append("file", file);
    
    return await apiClient.post<Document>("/api/app/documents/upload", formData);
  }
}

export class DocumentMockRepository implements IDocumentRepository {
  async getDocuments(): Promise<Document[]> {
    return [
      {
        id: "d1",
        title: "Q3_Financial_Report.pdf",
        type: "application/pdf",
        size: "2.4 MB",
        uploadedAt: new Date(Date.now() - 86400000).toISOString(),
        status: "ready",
      },
      {
        id: "d2",
        title: "Employee_Handbook_2026.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: "1.1 MB",
        uploadedAt: new Date().toISOString(),
        status: "processing",
      },
    ];
  }

  async uploadDocument(file: File): Promise<Document> {
    return {
      id: `d-${Date.now()}`,
      title: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadedAt: new Date().toISOString(),
      status: "processing",
    };
  }
}

export const documentRepository = new DocumentMockRepository();
