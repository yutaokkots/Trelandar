// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
// //   await prisma.User.create({
// //     data: {
// //         name: 'Vili3',
// //         email: 'vm3@gm3.com',
// //     }
// //   })

  
//     const allUsers = await prisma.user.findMany({
//         include: {
//             TaskCategory: true,
//             weeks: true,
//         }
//     })
//     console.log(allUsers)

//     allUsers.delete()

// }


// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })



// //   model User {
// //     id            Int            @id @default(autoincrement())
// //     name          String
// //     email         String         @unique
// //     TaskCategory  TaskCategory[]
// //     weeks         Week[]
// //   }


// // async function main() {
// //     2  await prisma.user.create({
// //     3    data: {
// //     4      name: 'Alice',
// //     5      email: 'alice@prisma.io',
// //     6      posts: {
// //     7        create: { title: 'Hello World' },
// //     8      },
// //     9      profile: {
// //     10        create: { bio: 'I like turtles' },
// //     11      },
// //     12    },
// //     13  })
// //     14
// //     15  const allUsers = await prisma.user.findMany({
// //     16    include: {
// //     17      posts: true,
// //     18      profile: true,
// //     19    },
// //     20  })
// //     21  console.dir(allUsers, { depth: null })
// //     22}