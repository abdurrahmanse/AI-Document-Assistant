import { ApiClient, setTokenProvider, setOnUnauthorized } from "@workspace/api-client";
import { useAuthStore } from "../store/auth-store";

// Base API URL from environment variables, defaulting to localhost for local dev if missing
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Instantiate the global singleton for the data layer
export const apiClient = new ApiClient({
  baseUrl: BASE_URL,
});

// Wire up the token provider from the Zustand store
setTokenProvider(() => useAuthStore.getState().token);

// Handle global 401s
setOnUnauthorized(() => {
  useAuthStore.getState().logout();
  // We can also trigger a redirect here if we have a router instance or global event
});

// Helper for direct access to the configured axios instance
export const axiosInstance = apiClient.axios;
