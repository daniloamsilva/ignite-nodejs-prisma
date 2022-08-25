import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.courses.create({
  //   data: {
  //     name: "Curso de React Native 3",
  //     duration: 300,
  //     description: "Curso excelente de React Native com Rodrigão",
  //     teacher: {
  //       connectOrCreate: {
  //         where: {
  //           id: 'fafasdf'
  //         },
  //         create: {
  //           name: 'Professor 2'
  //         }
  //       }
  //     }
  //   },
  // });

  // const result = await prisma.teachers.create({
  //   data: {
  //     name: 'Professor 56'
  //   }
  // })

  const result = await prisma.courses.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      duration: true,
      teacher: {
        select: {
          name: true
        }
      }
    }
  })

  console.log(result);
}

main();
