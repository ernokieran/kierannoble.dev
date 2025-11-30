import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { redirects } from './lib/redirects';

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (redirects[path]) {
    return NextResponse.redirect(redirects[path], 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
