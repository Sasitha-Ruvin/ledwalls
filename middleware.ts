import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const WWW_HOST = "www.ledwalls.lk";
const APEX_HOST = "ledwalls.lk";

/** Strip junk `?q=` URLs (legacy WebSite SearchAction template Google indexed). */
function redirectIfSearchQueryParam(request: NextRequest): NextResponse | null {
  if (!request.nextUrl.searchParams.has("q")) return null;

  const url = request.nextUrl.clone();
  url.searchParams.delete("q");
  url.search = url.searchParams.toString()
    ? `?${url.searchParams.toString()}`
    : "";
  return NextResponse.redirect(url, 308);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  const searchRedirect = redirectIfSearchQueryParam(request);
  if (searchRedirect) return searchRedirect;

  if (host === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.host = WWW_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|txt|xml)$).*)",
  ],
};
