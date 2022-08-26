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

  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'Course 02',
          duration: 400,
          description: 'Course 02 description'
        },
      },
      modules: {
        create: {
          name: 'Module 03',
          description: 'Module 03 description'
        }
      }
    }
  })

  console.log(result);
}

main();
