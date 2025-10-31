import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";
const authRoutes = ["/login", "/register"];
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
};

// only trigger when these pages
export const config = {
  matcher: ["/login", "/register"],
};
