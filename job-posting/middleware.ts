import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // Retrieve the JWT token from the session
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    // If the token doesn't exist and the route starts with /job, redirect to the login page
    if (!token && request.nextUrl.pathname.startsWith('/')) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('message', 'You must be logged in to access that page.');
        return NextResponse.redirect(loginUrl);
    }

    // If the token exists, allow the request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
