import { prisma } from '@/utils/api/prisma';
import { User } from '@prisma/client';

export const list = async (): Promise<User[]> => {
   const users = await prisma.user.findMany();
   return users;
};
