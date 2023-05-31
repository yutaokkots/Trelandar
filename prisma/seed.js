const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("seed running");

  ////////////////////
  // The following code adds new Users
  // const alice = await prisma.user.upsert({
  //   where: { email: "alice@prisma.io" },
  //   update: {},
  //   create: {
  //     email: "alice@prisma.io",
  //     name: "Alice",
  //     //   TaskCategory: {
  //     //     create: [
  //     //         {

  //     //         }
  //     //     ]
  //     //   }
  //   },
  // });
  ////////////////////


  ////////////////////
  // The following code adds new Task Categories
    // const dummyTasks = await prisma.TaskCategory.upsert({
    //   where: { id: 2},
    //   update: {},
    //   create: {
    //     name: 'Interview Prep',
    //     detail: 'practicing interview questions questions',
    //     color: '#FFFFFF',
    //     userId: 2,
    //   },
    // })
  ////////////////////
  

  ////////////////////
    const new newTask = await prisma.task.upsert({
      where: { email: 'bob@prisma.io' },
      update: {},
      create: {
        email: 'bob@prisma.io',
        name: 'Bob',
        posts: {}
      }
    })

  //   const bob = await prisma.task.upsert({
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
  console.log({ dummyTasks });
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
