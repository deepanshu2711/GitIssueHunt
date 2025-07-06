import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

import { Provider } from "@/generated/prisma";
import { prisma } from "@/lib/primsa";


const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      await prisma.user.upsert({
        where: {
          email: user.email!
        },
        update: { accessToken: account?.access_token },
        create: {
          email: user.email!,
          name: user.name!,
          image: user.image!,
          githubId: account?.providerAccountId,
          provider: Provider.github,
          accessToken: account?.access_token,
        }
      })

      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    }
  }
})

export { handler as GET, handler as POST }
