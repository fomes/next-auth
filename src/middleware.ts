import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      const signInURL = new URL("/sign-in", req.url);
      return NextResponse.redirect(signInURL);
    }
  },

  publicRoutes: ["/sign-in(.*)", "/sign-up(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
