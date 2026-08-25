import { ApiClient } from "../client";

export interface ServiceHealth {
  status: "ok" | "degraded" | "down" | "configured" | "missing";
  latency_ms?: number;
  error?: string;
}

export interface DetailedHealthResponse {
  status: "ok" | "degraded" | "down";
  environment: string;
  services: {
    api: ServiceHealth;
    database: ServiceHealth;
    redis: ServiceHealth;
    ai_providers: ServiceHealth;
  };
  timestamp: number;
}

export class HealthModule {
  constructor(private client: ApiClient) {}

  async getDetailedHealth(): Promise<DetailedHealthResponse> {
    return this.client.fetch<DetailedHealthResponse>("/health/detailed");
  }
}
