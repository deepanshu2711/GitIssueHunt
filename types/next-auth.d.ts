import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      githubId?: string;
      accessToken?: string;
      role?: string; // Add role if you have a custom User object
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    role?: string; // Add role if you have a custom User object
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    githubId?: string;
    accessToken?: string;
    role?: string; // Add role to token
  }
}
