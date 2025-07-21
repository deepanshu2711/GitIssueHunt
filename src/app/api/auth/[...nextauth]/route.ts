// import NextAuth from "next-auth"
// import Github from "next-auth/providers/github"

// import { Provider } from "@/generated/prisma";
// import { prisma } from "@/lib/primsa";


// const handler = NextAuth({
//   providers: [
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     })
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async signIn({ user, account }) {
//       await prisma.user.upsert({
//         where: {
//           email: user.email!
//         },
//         update: { accessToken: account?.access_token },
//         create: {
//           email: user.email!,
//           name: user.name!,
//           image: user.image!,
//           githubId: account?.providerAccountId,
//           provider: Provider.github,
//           accessToken: account?.access_token,
//         }
//       })
//       return true;
//     },
//     async jwt({ token, user, account }) {
//       if (account && user) {
//         token.accessToken = account.access_token;
//         token.githubId = account.providerAccountId;
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.githubId = token.githubId;
//         session.user.accessToken = token.accessToken;
//         session.user.id = token.id;
//       }
//       return session;
//     },
//     async redirect({ baseUrl }) {
//       return baseUrl;
//     }
//   }
// })

// export { handler as GET, handler as POST }

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

    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.githubId = account.providerAccountId;

        // Get user role from database
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { id: true, role: true },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role; // Assign role from DB to token
          console.log("User role from DB:", dbUser.role);
          console.log("user role in token:", token.role);
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.githubId = token.githubId;
        session.user.accessToken = token.accessToken;
        session.user.id = token.id;
        session.user.role = token.role; // Assign role to session user
      }
      return session;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    }
  }
})

export { handler as GET, handler as POST }
