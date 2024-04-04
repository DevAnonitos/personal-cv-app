import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  
};

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ],
};