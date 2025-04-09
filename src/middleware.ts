import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';

export async function middleware(request: NextRequestWithAuth) {
  const token = await getToken({ req: request });
  const isAdminRoute = request.nextUrl.pathname.startsWith('/api/admin');

  if (isAdminRoute) {
    if (!token?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/admin/:path*'],
}; 