import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accesstoken?: string; // Add the access token property to the session
  }

  interface User {
    accesstoken?: string; // Optionally, you can also add it to the user if needed
  }
}
