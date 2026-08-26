"use client";

import { useEffect, useState } from "react";
import { DocumentIntelligenceAPI } from "@workspace/api-client";

const api = new DocumentIntelligenceAPI({ baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' });

interface Job {
  id: string;
  name: string;
  status: string;
  error_message: string | null;
  created_at: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.client.axios.get<Job[]>("/admin/jobs");
        setJobs(response.data);
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Job Management</h1>
      
      {loading ? (
        <div>Loading jobs...</div>
      ) : (
        <div className="border rounded-md overflow-hidden bg-background">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-3">Job Name</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created At</th>
                <th className="px-6 py-3">Error</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {jobs.map(job => (
                <tr key={job.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4">{job.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${job.status === 'COMPLETED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : job.status === 'FAILED' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(job.created_at).toLocaleString()}</td>
                  <td className="px-6 py-4 text-red-500">{job.error_message || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
