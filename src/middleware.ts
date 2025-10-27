import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';

export async function middleware(request: NextRequestWithAuth) {
  const token = await getToken({ req: request });
  const isAdminApiRoute = request.nextUrl.pathname.startsWith('/api/admin');
  const isAdminPageRoute = request.nextUrl.pathname.startsWith('/admin');

  // Protect admin API routes
  if (isAdminApiRoute) {
    if (!token?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
  }

  // Protect admin page route
  if (isAdminPageRoute) {
    if (!token) {
      // Not authenticated - redirect to signin
      const url = new URL('/auth/signin', request.url);
      return NextResponse.redirect(url);
    }
    if (!token.isAdmin) {
      // Authenticated but not admin - redirect to dashboard
      const url = new URL('/dashboard', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/admin/:path*', '/admin/:path*'],
}; 