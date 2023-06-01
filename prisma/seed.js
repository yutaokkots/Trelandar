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
    //     detail: 'practicing interview questions',
    //     color: '#FFFFFF',
    //     userId: 2,
    //   },
    // })
  //////////////////

//   const dummyTaskCategory2 = await prisma.TaskCategory.upsert({
//     where: { id: 3 },
//     update: {},
//     create: {
//       name: 'Fitness',
//       detail: 'Exercise and workout routines',
//       color: '#00FF00',
//       userId: 2,
//     },
//   });
  
//   const dummyTaskCategory3 = await prisma.TaskCategory.upsert({
//     where: { id: 4 },
//     update: {},
//     create: {
//       name: 'Project Management',
//       detail: 'Managing projects and tasks',
//       color: '#FFA500',
//       userId: 2, 
//     },
//   });

//   const dummyTaskCategory4 = await prisma.TaskCategory.upsert({
//   where: { id: 5 },
//   update: {},
//   create: {
//     name: 'Home Improvement',
//     detail: 'Tasks related to home renovation and repairs',
//     color: '#FF0000',
//     userId: 2,
//   },
// });


  ////////////////////
  // The following code adds a new Task instance:
    // let currentTime = new Date().getTime()
    // let startingTime = new Date(currentTime + 42* 60 * 60 * 1000)
    // let endingTime = new Date(currentTime + 48 * 60 * 60 * 1000); //end time 1 hr from now
    // // let currentTime = new Date()
    // // let startingTime = new Date(currentTime.setHours(48))
    // // let endingTime = new Date(currentTime.setHours(49))
    // console.log(startingTime)
    // console.log(endingTime)
    // const newTask = await prisma.task.upsert({
    //   where: { id: 7 },
    //   update: {},
    //   create: {
    //     notes: 'review leetcode problem with Randy',
    //     tasktype: {
    //       connect: 
    //         {id: 1}
    //     },
    //     startTime: startingTime,
    //     endTime: endingTime
    //   }
    // })

let currentTime = new Date().getTime()
const taskType3StartTime2 = new Date(currentTime + 40* 60 * 60 * 1000); // Use your own logic to generate a random startTime
const taskType3EndTime2 = new Date(taskType3StartTime2.getTime() + 60 * 60 * 1000);

const dummyTask2 = await prisma.task.upsert({
  where: { id: 14 },
  update: {},
  create: {
    notes: 'walk for 2 miles',
    tasktype: {
      connect: { id: 3 },
    },
    startTime: taskType3StartTime2,
    endTime: taskType3EndTime2,
  },
});

const taskType3StartTime3 = new Date(currentTime + 42* 60 * 60 * 1000); // Use your own logic to generate a random startTime
const taskType3EndTime3 = new Date(taskType3StartTime3.getTime() + 60 * 60 * 1000);

const dummyTask3 = await prisma.task.upsert({
  where: { id: 15 },
  update: {},
  create: {
    notes: 'Overview of next steps',
    tasktype: {
      connect: { id: 4 },
    },
    startTime: taskType3StartTime3,
    endTime: taskType3EndTime3,
  },
});

const taskType3StartTime4 = new Date(currentTime + 44* 60 * 60 * 1000); // Use your own logic to generate a random startTime
const taskType3EndTime4 = new Date(taskType3StartTime4.getTime() + 60 * 60 * 1000);

const dummyTask4 = await prisma.task.upsert({
  where: { id: 16 },
  update: {},
  create: {
    notes: 'Fix faucet',
    tasktype: {
      connect: { id: 5 },
    },
    startTime: taskType3StartTime4,
    endTime: taskType3EndTime4,
  },
});

  console.log( dummyTask2, dummyTask3, dummyTask4)
  //console.log({ dummyTaskCategory2, dummyTaskCategory3, dummyTaskCategory4 });
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
