import { axiosInstance } from "../api/client";

export const authApi = {
  requestOtp: async (email: string) => {
    const res = await axiosInstance.post<{ message: string }>("/api/v1/auth/request-otp", { email });
    return res.data;
  },
  
  verifyOtp: async (email: string, code: string) => {
    const res = await axiosInstance.post<{ 
      access_token: string;
      refresh_token: string;
      user: { id: string; email: string };
    }>("/api/v1/auth/verify-otp", { email, code });
    return res.data;
  },
  
  register: async (email: string, password: string, first_name?: string, last_name?: string) => {
    const res = await axiosInstance.post<{ message: string; user_id: string }>("/api/v1/auth/register", { 
      email, password, first_name, last_name
    });
    return res.data;
  },
  
  login: async (email: string, password: string) => {
    const res = await axiosInstance.post<{
      access_token: string;
      refresh_token: string;
      user: { id: string; email: string; first_name: string; last_name: string };
    }>("/api/v1/auth/login", { email, password });
    return res.data;
  },

  requestPasswordReset: async (email: string) => {
    const res = await axiosInstance.post<{ message: string }>("/api/v1/auth/request-otp", { 
      email, 
      purpose: "reset_password" 
    });
    return res.data;
  },

  resetPassword: async (email: string, code: string, new_password: string) => {
    const res = await axiosInstance.post<{ message: string }>("/api/v1/auth/reset-password", { 
      email, 
      code, 
      new_password 
    });
    return res.data;
  }
};
