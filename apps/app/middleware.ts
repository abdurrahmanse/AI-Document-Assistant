import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const refreshToken = request.cookies.get('refresh_token')?.value;
  
  // If we have a refresh token but no access token, we still allow them to hit protected routes
  // The client will attempt to refresh the token. Alternatively we could do it here, but 
  // keeping middleware simple is usually better.
  const hasAuth = !!(token || refreshToken);
  
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                     request.nextUrl.pathname.startsWith('/register') || 
                     request.nextUrl.pathname.startsWith('/forgot-password');
                     
  // Protected routes require authentication
  if (!hasAuth && !isAuthPage && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Authenticated users shouldn't see auth pages
  if (hasAuth && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

