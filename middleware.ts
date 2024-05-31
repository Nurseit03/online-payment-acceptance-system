import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const queryParams = url.searchParams;
  const isRedirect = queryParams.get("isRedirect");
  const redirectUrl = queryParams.get("redirectUrl");

  if (!!isRedirect && !!redirectUrl) {
    const url = new URL(redirectUrl, req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
