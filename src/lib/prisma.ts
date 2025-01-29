// Postgres database client
// import { PrismaClient } from '@prisma/client'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient().$extends(withAccelerate())

// const globalForPrisma = global as unknown as { prisma: typeof prisma }

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma


// MongoDb database client
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prisma: ReturnType<typeof prismaClientSingleton>;
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
