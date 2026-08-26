import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// To avoid circular dependencies or tight coupling with a specific store,
// we allow injecting a token provider function.
let tokenProvider: (() => string | null) | null = null;
let onUnauthorized: (() => void) | null = null;

export const setTokenProvider = (provider: () => string | null) => {
  tokenProvider = provider;
};

export const setOnUnauthorized = (callback: () => void) => {
  onUnauthorized = callback;
};

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (tokenProvider) {
        const token = tokenProvider();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Handle unauthorized (e.g., clear session, redirect to login)
        if (onUnauthorized) {
          onUnauthorized();
        }
      }
      return Promise.reject(error);
    }
  );
};
