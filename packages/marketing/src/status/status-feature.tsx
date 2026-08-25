"use client";

import { useQuery } from "@tanstack/react-query";
import { DocumentIntelligenceAPI, DetailedHealthResponse } from "@workspace/api-client";
import { useMemo } from "react";

export function StatusFeature({ apiUrl }: { apiUrl: string }) {
  const api = useMemo(() => new DocumentIntelligenceAPI({
    baseUrl: apiUrl,
  }), [apiUrl]);

  const { data, isLoading, isError, error, refetch, dataUpdatedAt } = useQuery<DetailedHealthResponse, Error>({
    queryKey: ["web-status"],
    queryFn: () => api.health.getDetailedHealth(),
    refetchInterval: 30000,
  });

  const lastUpdated = dataUpdatedAt ? new Date(dataUpdatedAt) : null;

  const getStatusColor = (status?: string) => {
    if (status === "ok") return "bg-green-500";
    if (status === "degraded") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">System Status</h1>
          <button 
            onClick={() => refetch()}
            disabled={isLoading}
            className="px-4 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Checking..." : "Refresh"}
          </button>
        </div>

        {isError ? (
          <div className="bg-red-900/50 border border-red-500 p-4 rounded-md mb-6">
            <h2 className="text-red-400 font-semibold mb-1">Status Check Failed</h2>
            <p className="text-red-200">{error.message}</p>
          </div>
        ) : data ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${getStatusColor(data.status)} shadow-[0_0_10px_currentColor]`} />
                <h2 className="text-xl font-semibold capitalize">
                  {data.status === "ok" ? "All Systems Operational" : `System ${data.status}`}
                </h2>
              </div>
              <div className="text-sm text-neutral-400">
                Environment: <span className="text-white ml-1">{data.environment}</span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {Object.entries(data.services).map(([key, svc]) => {
                const service = svc as any;
                return (
                <div key={key} className="flex items-center justify-between py-3 border-b border-neutral-800 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(service.status)}`} />
                    <span className="capitalize font-medium text-neutral-300">{key.replace("_", " ")}</span>
                  </div>
                  <div className="text-right flex items-center space-x-4">
                    {service.latency_ms && (
                      <span className="text-sm text-neutral-500">{service.latency_ms} ms</span>
                    )}
                    <span className="text-sm font-medium uppercase tracking-wider text-neutral-400">
                      {service.status}
                    </span>
                  </div>
                </div>
                );
              })}
            </div>
            <div className="bg-neutral-950 p-4 text-center text-sm text-neutral-500">
              Last updated: {lastUpdated?.toLocaleTimeString()}
            </div>
          </div>
        ) : (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-neutral-800 rounded"></div>
                <div className="h-4 bg-neutral-800 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
