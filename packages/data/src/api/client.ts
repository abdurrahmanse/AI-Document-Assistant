/// <reference types="node" />
// Base API URL from environment variables, defaulting to localhost for local dev if missing
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * A lightweight API client built on top of the native fetch API.
 * Automatically prepends the base URL and handles JSON parsing.
 */
export const apiClient = {
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API GET request failed: ${response.statusText}`);
    }

    return response.json();
  },

  async post<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API POST request failed: ${response.statusText}`);
    }

    return response.json();
  },
};
