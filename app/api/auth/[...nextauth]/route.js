import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToAtlas } from "@utils/database";
import User from "@models/user";
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
        if (utils.getAddress(credentials && credentials.address)) {
          return null
        }
        return {
          id: credentials?.address,
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
    async signIn( {user, account} ) {
      try{
        console.log('user', user);
        console.log('account', account);
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  },
  async session({ session, token }) {
    const sessionUser = await User.findOne({ walletAddress: token.sub });
    session.user.id = sessionUser._id.toString();
    return session;
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    newUser: '/',
  },
})

const handler = NextAuth(option);

export default handler;