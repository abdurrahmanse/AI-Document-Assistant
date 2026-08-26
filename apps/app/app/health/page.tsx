"use client";

import { useQuery } from "@tanstack/react-query";
import { DocumentIntelligenceAPI, DetailedHealthResponse } from "@workspace/api-client";
import { env } from "../../env";
import { useAppContent } from "@workspace/data";

const api = new DocumentIntelligenceAPI({
  baseUrl: env.NEXT_PUBLIC_API_URL,
});

export default function AppHealthPage() {
  const { data: appData, isLoading: appLoading } = useAppContent();
  const { data, isLoading, isError, error, refetch, dataUpdatedAt } = useQuery<DetailedHealthResponse, Error>({
    queryKey: ["app-health"],
    queryFn: () => api.health.getDetailedHealth(),
    refetchInterval: 30000,
  });

  if (appLoading || !appData) return null;

  const lastUpdated = dataUpdatedAt ? new Date(dataUpdatedAt) : null;

  return (
    <div className="p-8 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-2xl font-bold">{appData.health.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{appData.health.description}</p>
        </div>
        <button 
          onClick={() => refetch()}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? appData.health.refreshingButton : appData.health.refreshButton}
        </button>
      </div>

      {isError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          <strong>{appData.health.errorTitle}:</strong> {error.message}
        </div>
      )}

      {data ? (
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(data.services).map(([key, service]) => {
            const isOk = service.status === "ok" || service.status === "configured";
            return (
              <div key={key} className="p-5 border rounded-lg bg-white dark:bg-gray-900 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold capitalize text-lg text-gray-800 dark:text-gray-100">{key.replace("_", " ")}</h3>
                  <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${isOk ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {service.status}
                  </span>
                </div>
                {service.latency_ms !== undefined && (
                  <div className="text-sm text-gray-500 mt-auto pt-4">
                    Response time: {service.latency_ms}ms
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : !isError && (
        <div className="text-gray-500">{appData.health.loading}</div>
      )}
      
      {lastUpdated && (
        <div className="mt-8 text-sm text-gray-400 text-center">
          {appData.health.lastUpdated} {lastUpdated.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
