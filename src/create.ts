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

  // const result = await prisma.courses.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     description: true,
  //     duration: true,
  //     teacher: {
  //       select: {
  //         name: true
  //       }
  //     }
  //   }
  // })

  // const result = await prisma.authors.create({
  //   data: {
  //     name: 'Author 02',
  //     books: {
  //       createMany: {
  //         data: [
  //           { name: "Book 02" },
  //           { name: "Book 03" },
  //         ]
  //       }
  //     }
  //   }
  // })

  const result = await prisma.books.create({
    data: {
      name: 'Book 04',
      author: {
        connectOrCreate: {
          where: { id: '9a183c7c-ada7-48d7-bd25-87029ba941ae' },
          create: { name: 'Author 666' }
        }
      }
    }
  })

  console.log(result);
}

main();
