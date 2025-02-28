import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("test middleware");
  return NextResponse.next();
  //   return NextResponse.redirect(new URL("/test", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/content/:path*",
};
