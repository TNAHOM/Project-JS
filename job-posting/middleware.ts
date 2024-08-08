import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;

    if (!currentUser && request.nextUrl.pathname.startsWith('/job')) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('message', 'You must be logged in to access that page.');
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/job/:path*'],
};
