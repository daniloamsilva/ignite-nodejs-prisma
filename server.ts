import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.courses.create({
  //   data: {
  //     name: 'Curso de Javascript',
  //     duration: 4,
  //     description: 'Curso interessante de Javascript'
  //   }
  // })

  // const result = await prisma.courses.findFirst();

  const result = await prisma.courses.update({
    where: { id: '747b6b60-86a5-4157-802e-8e725cfba0a0' },
    data: {
      name: 'Curso de Typescript',
      duration: 200
    }
  })

  console.log(result);
}

main();