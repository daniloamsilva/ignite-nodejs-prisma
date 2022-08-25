import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native 3",
      duration: 300,
      description: "Curso excelente de React Native com Rodrigão",
      teacher: {
        connectOrCreate: {
          where: {
            id: 'fafasdf'
          },
          create: {
            name: 'Professor 2'
          }
        }
      }
    },
  });

  console.log(result);
}

main();
