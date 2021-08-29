import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { list } from '../../../services/users/list';

export default async (_req: NextApiRequest, res: NextApiResponse<User[]>): Promise<void> => {
   const users = await list();
   res.json(users);
};
