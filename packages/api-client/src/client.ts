import axios, { type AxiosInstance } from "axios";
import { setupInterceptors } from "./interceptors";

export interface ApiClientConfig {
  baseUrl: string;
}

export class ApiClient {
  public baseUrl: string;
  public axios: AxiosInstance;

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Attach interceptors
    setupInterceptors(this.axios);
  }
}
