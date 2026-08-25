"use client";

import { useEffect, useState } from "react";
import { documentRepository } from "@workspace/data";
import { Document } from "@workspace/types";
import { DocumentCard } from "./DocumentCard";
import { Button } from "@workspace/ui/components/ui";

export function DocumentGrid() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const data = await documentRepository.getDocuments();
        setDocuments(data);
      } catch (err) {
        console.error("Failed to load documents", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  const handleUpload = async () => {
    // Mocking an upload
    const mockFile = new File(["dummy content"], "new_document.pdf", { type: "application/pdf" });
    try {
      const newDoc = await documentRepository.uploadDocument(mockFile);
      setDocuments([newDoc, ...documents]);
    } catch (err) {
      console.error("Failed to upload document", err);
    }
  };

  if (loading) return <div>Loading documents...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Your Documents</h2>
        <Button onClick={handleUpload}>Upload Document</Button>
      </div>

      {documents.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed rounded-lg bg-muted/10">
          <h3 className="text-lg font-semibold">No documents yet</h3>
          <p className="text-muted-foreground mt-2">Upload your first document to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
