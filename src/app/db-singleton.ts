import { PrismaClient  } from "@prisma/client";

const ID = 1

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prismaClientSingleton = () => {
    console.log('re-create prisma', ID)
    return new PrismaClient()
}
  
const prisma = globalThis.prisma ?? prismaClientSingleton()

export { prisma }

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma
} 