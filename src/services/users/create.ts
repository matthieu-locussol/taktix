import { prisma } from '@/utils/api/prisma';
import { User } from '@prisma/client';

export type CreateUserDto = {
   name?: string;
   email: string;
};

export const create = async (data: CreateUserDto): Promise<User> => {
   const user = await prisma.user.create({
      data,
   });

   return user;
};
