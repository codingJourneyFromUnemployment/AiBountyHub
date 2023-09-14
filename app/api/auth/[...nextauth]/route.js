import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToAtlas } from "@/utils/database";
import User from "@/models/user";
import { utils } from 'ethers'

const option = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        address: {
          label: 'Address',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials) {
        try {
          await connectToAtlas();
          const userExist = await User.findOne({ walletAddress: credentials.address });
          if (!userExist) {
            const newUser = new User({
              walletAddress: credentials.address,
            });
            await newUser.save();
            return { id: newUser._id.toString(), address: newUser.walletAddress };
          } else {
            return { id: userExist._id.toString(), address: userExist.walletAddress };
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.address = user.address;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.address = token.address;
      return session;
    },
    async signIn(){
      console.log(process.env.JWT_SECRET)
      console.log(process.env.NEXT_AUTH_SECRET)
      console.log(process.env.MONGO_URI)
    }
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    newUser: '/',
  },
});

const handler = NextAuth(option);

export { handler as GET, handler as POST }