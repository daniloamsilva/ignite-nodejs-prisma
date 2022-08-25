import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findFirst({
    take: -1,
    orderBy: {created_at: 'asc'}
  });

  console.log(result);
}

main();