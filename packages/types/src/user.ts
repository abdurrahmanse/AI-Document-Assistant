/**
 * Canonical user representation used across the data layer and stores.
 * Mirrors the backend's `/api/v1/auth/login` and `/verify-otp` payloads.
 */
export interface UserProfile {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}
