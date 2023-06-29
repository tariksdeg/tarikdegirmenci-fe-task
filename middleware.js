import { NextResponse } from "next/server";

const AUTH_PAGES = ["/login"];

const isAuthPages = (url) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("login") ?? { value: null };

  // const hasVerifiedToken = token && (await verifyJwtToken(token));
  const hasVerifiedToken = token;
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      return response;
    }

    const response = NextResponse.redirect(new URL(`/`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const response = NextResponse.redirect(new URL(`/login`, url));

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api/auth).*)(.+)"],
};
