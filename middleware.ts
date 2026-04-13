import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname.toLowerCase();

    // 1. Handle 410 Gone for specific deleted files
    const goneFiles = [
        '/profile.pdf',
    ];

    if (goneFiles.some(file => url === file.toLowerCase())) {
        return new NextResponse(null, {
            status: 410,
            statusText: 'Gone',
        });
    }

    // 2. Transferred Query Param Cleanup (?id=...)
    // If we have a plain root request with ?id=, it's likely a legacy link
    if (url === '/' && request.nextUrl.searchParams.has('id')) {
        // Redirect to home without the legacy ID param
        return NextResponse.redirect(new URL('/', request.url), 301);
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
