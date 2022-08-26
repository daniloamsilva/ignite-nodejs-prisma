import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const take = 2;
  let exist = true;
  let skip = 0;

  while(exist) {
    const result = await prisma.courses.findMany({skip, take});
    if(!result.length) exist = false;
    skip += take;

    console.log(result);
    console.log("=========================");
  }
}

main();
