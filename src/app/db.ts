import { PrismaClient  } from "@prisma/client";

const ID = 1
console.log('re-create prisma', ID)
export const prisma = new PrismaClient()