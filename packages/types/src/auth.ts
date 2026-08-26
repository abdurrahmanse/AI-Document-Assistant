import type { UserProfile } from "./user";

/**
 * Tokens issued by the authentication endpoints.
 */
export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface AuthSession {
  user: UserProfile;
  tokens: AuthTokens;
}

export type { UserProfile };
