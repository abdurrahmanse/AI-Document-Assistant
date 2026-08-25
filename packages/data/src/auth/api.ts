import { apiClient } from "../api/client";

export const authApi = {
  requestOtp: async (email: string) => {
    return apiClient.post<{ message: string }>("/api/v1/auth/request-otp", { email });
  },
  
  verifyOtp: async (email: string, code: string) => {
    return apiClient.post<{ 
      access_token: string;
      refresh_token: string;
      user: { id: string; email: string };
    }>("/api/v1/auth/verify-otp", { email, code });
  },
  
  register: async (email: string, password: string, first_name?: string, last_name?: string) => {
    return apiClient.post<{ message: string; user_id: string }>("/api/v1/auth/register", { 
      email, password, first_name, last_name
    });
  },
  
  login: async (email: string, password: string) => {
    return apiClient.post<{
      access_token: string;
      refresh_token: string;
      user: { id: string; email: string; first_name: string; last_name: string };
    }>("/api/v1/auth/login", { email, password });
  }
};
