import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { prisma } from '../../../utils/api/prisma';

export default NextAuth({
   providers: [
      Providers.Discord({
         clientId: process.env.DISCORD_CLIENT_ID,
         clientSecret: process.env.DISCORD_CLIENT_SECRET,
      }),
   ],
   adapter: PrismaAdapter(prisma),
   database: process.env.DATABASE_URL,
});
