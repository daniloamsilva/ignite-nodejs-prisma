import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.create({
    data: {
      name: 'Curso de Prisma',
      duration: 3,
      description: 'Curso bem estranho de Prisma'
    }
  });
}

main();
