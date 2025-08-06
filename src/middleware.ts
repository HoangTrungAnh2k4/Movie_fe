import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isProtectedRoute } from './lib/protectedRoutes';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (!isProtectedRoute(pathname)) return NextResponse.next();

    // Nếu là route được bảo vệ → kiểm tra cookie
    const accessToken = request.cookies.get('access_token')?.value;
    if (!accessToken || accessToken === 'undefined') {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}
