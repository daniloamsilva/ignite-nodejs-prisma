import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.modules.create({
  //   data: {
  //     name: 'Module 01',
  //     description: 'Descrição do módulo 01'
  //   }
  // })

  // const result = await prisma.modules.create({
  //   data: {
  //     name: 'Module 02',
  //     description: 'Descrição do módulo 02',
  //     CoursesModules: {
  //       create: {
  //         course: {
  //           create: {
  //             name: 'Curso 02',
  //             duration: 200,
  //             description: 'Descrição do curso 02'
  //           }
  //         }
  //       }
  //     }
  //   }
  // });

  // const result = await prisma.courses.findMany({
  //   include: {
  //     modules: true
  //   }
  // })

  const result = await prisma.coursesModules.findMany({
    select: {
      course: {
        select: {
          id: true,
          name: true,
          duration: true,
          description: true
        }
      },
      module: {
        select: {
          id: true,
          name: true,
          description: true
        }
      }
    }
  })

  console.log(result);
}

main();
