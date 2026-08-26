"use client";

import { useEffect, useState } from "react";
import { DocumentIntelligenceAPI } from "@workspace/api-client";
import { websiteData } from "@workspace/data";

const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' });

interface Metrics {
  total_users: number;
  total_documents: number;
  total_conversations: number;
  total_jobs: number;
}

export default function UsagePage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await api.client.axios.get<Metrics>("/admin/metrics");
        setMetrics(response.data);
      } catch (err) {
        console.error("Failed to load usage metrics", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{websiteData.admin.usage.title}</h1>
      
      {loading ? (
        <div>{websiteData.admin.usage.loading}</div>
      ) : metrics ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">{websiteData.admin.usage.cards.users.title}</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_users}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">{websiteData.admin.usage.cards.documents.title}</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_documents}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">{websiteData.admin.usage.cards.conversations.title}</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_conversations}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">{websiteData.admin.usage.cards.jobs.title}</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_jobs}</p>
          </div>
        </div>
      ) : (
        <div>{websiteData.admin.usage.failed}</div>
      )}
    </div>
  );
}
