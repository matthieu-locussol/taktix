import { prisma } from '@/utils/api/prisma';
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<User>) => {
   const { email } = req.body;
   const user = await prisma.user.create({
      data: {
         email,
      },
   });

   res.json(user);
};
