import type { ApiClient } from "../client";

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
}

export class AuthModule {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  async login(data: any): Promise<AuthResponse> {
    const res = await this.client.axios.post<AuthResponse>("/auth/login", data);
    return res.data;
  }

  async register(data: any): Promise<{ message: string; user_id: string }> {
    const res = await this.client.axios.post("/auth/register", data);
    return res.data;
  }

  async requestOtp(data: { email: string; purpose?: string }): Promise<{ message: string }> {
    const res = await this.client.axios.post("/auth/request-otp", data);
    return res.data;
  }

  async verifyOtp(data: { email: string; code: string }): Promise<AuthResponse> {
    const res = await this.client.axios.post<AuthResponse>("/auth/verify-otp", data);
    return res.data;
  }

  async resetPassword(data: any): Promise<{ message: string }> {
    const res = await this.client.axios.post("/auth/reset-password", data);
    return res.data;
  }
}
