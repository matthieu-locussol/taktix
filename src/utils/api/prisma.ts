// See: https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from '@prisma/client';

interface CustomNodeJSGlobal extends NodeJS.Global {
   prisma: PrismaClient;
}

declare const global: CustomNodeJSGlobal;

if (process.env.NODE_ENV === 'development') {
   global.prisma = new PrismaClient();
}

export const prisma = global.prisma || new PrismaClient();
