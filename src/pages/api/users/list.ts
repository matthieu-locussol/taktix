import { prisma } from '@/utils/api/prisma';
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
   const users = await prisma.user.findMany();
   res.json(users);
};
