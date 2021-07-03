import { create } from '@/services/users/create';
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<User>): Promise<void> => {
   const { email, name } = req.body;

   const user = await create({
      email,
      name,
   });

   res.json(user);
};
