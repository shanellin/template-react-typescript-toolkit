import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const cookieToken = request.cookies.get("token")
  // if (cookieToken) {
  //   // authentication handling
  // } else {
  //   return NextResponse.redirect(new URL("/", request.url))
  // }
}

export const config = {
  // matcher: ["/hooks/:path*"]
}
