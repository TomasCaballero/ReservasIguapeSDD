import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SESSION_COOKIE_NAME, verifySessionToken } from '@/lib/auth/session';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /adminpanel routes
  if (pathname.startsWith('/adminpanel')) {
    const isLoginPage = pathname === '/adminpanel/login';
    const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const session = token ? verifySessionToken(token) : null;

    if (!session && !isLoginPage) {
      const loginUrl = new URL('/adminpanel/login', request.url);
      const response = NextResponse.redirect(loginUrl);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }

    if (session && isLoginPage) {
      const dashboardUrl = new URL('/adminpanel', request.url);
      const response = NextResponse.redirect(dashboardUrl);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }

    const response = NextResponse.next();
    // Enforce noindex for all admin panel routes (RF-33, AC-49)
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // Protect /api/admin routes (except auth/login)
  if (pathname.startsWith('/api/admin')) {
    const isAuthRoute = pathname.startsWith('/api/admin/auth/login');
    if (!isAuthRoute) {
      const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
      const session = token ? verifySessionToken(token) : null;
      if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/adminpanel/:path*', '/api/admin/:path*'],
};
