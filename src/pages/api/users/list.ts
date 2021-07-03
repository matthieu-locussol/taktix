import { list } from '@/services/users/list';
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<User[]>): Promise<void> => {
   const users = await list();
   res.json(users);
};
