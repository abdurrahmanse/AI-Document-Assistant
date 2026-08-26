import { DocumentIntelligenceAPI, setTokenProvider } from '@workspace/api-client'


// Simple client-side cookie reader for the token provider
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

setTokenProvider(() => getCookie('auth_token'));

const api = new DocumentIntelligenceAPI({ 
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1' 
});

export function useApi() {
  return api;
}
