import { User } from '@prisma/client';
import { prisma } from '../../utils/api/prisma';

export const list = async (): Promise<User[]> => {
   const users = await prisma.user.findMany();
   return users;
};
