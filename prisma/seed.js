const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// model User {
//     id            Int            @id @default(autoincrement())
//     name          String
//     email         String         @unique
//     avatar        String?
//     password      String?
//     TaskCategory  TaskCategory[]
//     weeks         Week[]
//   }

// model TaskCategory{
//     id          Int             @id @default(autoincrement())
//     name        String          @db.VarChar(50)
//     detail      String          @db.VarChar(500)
//     color       String          @db.VarChar(30)
//     userId      Int
//     user        User            @relation(fields: [userId], references: [id])
//     tasks       Task[]
//   }

async function main() {
  console.log("seed running");
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      //   TaskCategory: {
      //     create: [
      //         {

      //         }
      //     ]
      //   }
    },
  });

  //   const dummyTasks = await prisma.TaskCategory.upsert({
  //     where: { name: 'Leetcode' },
  //     update: {},
  //     create: {
  //       email: 'alice@prisma.io',
  //       name: 'Alice',
  //       TaskCategory: {
  //         create: [
  //             {

  //             }
  //         ]
  //       }
  //     },
  //   })

  //   const bob = await prisma.user.upsert({
  //     where: { email: 'bob@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'bob@prisma.io',
  //       name: 'Bob',
  //       posts: {
  //         create: [
  //           {
  //             title: 'Follow Prisma on Twitter',
  //             content: 'https://twitter.com/prisma',
  //             published: true,
  //           },
  //           {
  //             title: 'Follow Nexus on Twitter',
  //             content: 'https://twitter.com/nexusgql',
  //             published: true,
  //           },
  //         ],
  //       },
  //     },
  //   })
  console.log({ alice });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
