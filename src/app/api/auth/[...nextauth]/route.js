import User from "@/models/User";
import { connection } from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      Credential: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connection();
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User not exist");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            throw new Error("Password wrong");
          }

          return user;
        } catch (error) {
          console.error(error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user}) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token}) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
  pages: {
    signIn: "/home",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
