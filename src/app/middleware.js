import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const token = cookieStore.get("user").value;

  // Redirect /category to /category/new
  if (pathname === "/category") {
    return NextResponse.redirect(new URL("/category/new", request.url));
  }

  // Protected routes that require authentication
  const protectedRoutes = [
    "/profile",
    "/checkout",
    "/reset-password",
    "/verify-email",
    "/login",
    "/signup",
    "/forgot-password",
  ];

  const authRoutes = [];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // If user is not logged in and tries to access a protected route
  if (isProtectedRoute && !token) {
    // Store the intended URL to redirect back after login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is logged in and tries to access auth routes
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)"],
};
