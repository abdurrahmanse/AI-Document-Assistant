"use client";

import { useQuery } from "@tanstack/react-query";
import { DocumentIntelligenceAPI, DetailedHealthResponse } from "@workspace/api-client";
import { env } from "../../env";
import { useHealthStore } from "@workspace/ui/stores/use-health-store";
import { useAppContent } from "@workspace/data";

const api = new DocumentIntelligenceAPI({
  baseUrl: env.NEXT_PUBLIC_API_URL,
});

export default function AdminHealthDashboard() {
  const { data: appData, isLoading: appLoading } = useAppContent();
  const { viewMode, toggleViewMode } = useHealthStore();

  const { data, isLoading, isError, error, refetch, dataUpdatedAt } = useQuery<DetailedHealthResponse, Error>({
    queryKey: ["admin-health"],
    queryFn: () => api.health.getDetailedHealth(),
    refetchInterval: 30000,
  });

  if (appLoading || !appData) return null;

  const lastUpdated = dataUpdatedAt ? new Date(dataUpdatedAt) : null;

  return (
    <div className="p-8 font-sans max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{appData.adminHealth.title}</h1>
          <p className="text-sm text-gray-500 mt-2 font-mono">{appData.adminHealth.environment} {data?.environment || "unknown"}</p>
        </div>
        <div className="flex items-center space-x-4">
          {isLoading && <span className="text-sm text-blue-500 font-medium animate-pulse">{appData.adminHealth.syncing}</span>}
          <button
            onClick={toggleViewMode}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md shadow-sm hover:bg-gray-200 transition-colors"
          >
            {viewMode === "detailed" ? appData.adminHealth.showCompact : appData.adminHealth.showDetailed}
          </button>
          <button 
            onClick={() => refetch()}
            disabled={isLoading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {appData.adminHealth.refresh}
          </button>
        </div>
      </div>

      {isError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <h3 className="text-red-800 font-bold">{appData.adminHealth.errorTitle}</h3>
          <p className="text-red-700 text-sm mt-1">{error.message}</p>
        </div>
      )}

      {data && (
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div className={`p-4 rounded-lg shadow-sm border ${data.status === 'ok' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h2 className={`text-lg font-semibold ${data.status === 'ok' ? 'text-green-800' : 'text-red-800'}`}>
                {appData.adminHealth.overallStatus} {data.status.toUpperCase()}
              </h2>
            </div>
            {lastUpdated && (
               <div className="text-sm text-gray-500 font-mono">
                 {appData.adminHealth.lastCheck} {lastUpdated.toLocaleTimeString()}
               </div>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(data.services).map(([key, service]) => {
              const isOk = service.status === "ok" || service.status === "configured";
              return (
                <div key={key} className="p-6 border rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-700 dark:text-gray-200 capitalize">{key.replace("_", " ")}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${isOk ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {service.status.toUpperCase()}
                    </span>
                  </div>
                  
                  {service.latency_ms !== undefined && (
                    <div className="mt-4">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{appData.adminHealth.latency}</div>
                      <div className="text-2xl font-light text-gray-900 dark:text-gray-100">{service.latency_ms}<span className="text-sm ml-1 text-gray-500">ms</span></div>
                    </div>
                  )}

                  {service.error && viewMode === "detailed" && (
                    <div className="mt-4 p-3 bg-red-50 rounded text-xs font-mono text-red-700 overflow-x-auto whitespace-pre-wrap break-words">
                      {service.error}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {viewMode === "detailed" && (
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{appData.adminHealth.rawJsonResponse}</h3>
              <pre className="text-xs font-mono text-gray-600 dark:text-gray-400 overflow-x-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
