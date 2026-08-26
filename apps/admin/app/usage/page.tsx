"use client";

import { useEffect, useState } from "react";
import { DocumentIntelligenceAPI } from "@workspace/api-client";

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
      <h1 className="text-3xl font-bold">Platform Usage</h1>
      
      {loading ? (
        <div>Loading metrics...</div>
      ) : metrics ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">Total Users</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_users}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">Total Documents</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_documents}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">Total Conversations</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_conversations}</p>
          </div>
          <div className="p-6 border rounded-md bg-background">
            <h3 className="font-semibold text-sm text-muted-foreground">Total Jobs Executed</h3>
            <p className="text-3xl font-bold mt-2">{metrics.total_jobs}</p>
          </div>
        </div>
      ) : (
        <div>Failed to load metrics.</div>
      )}
    </div>
  );
}
