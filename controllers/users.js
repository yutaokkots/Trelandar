const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function signUp(req, res) {
  await prisma.User.create({
    data: {
        name: 'Vili3',
        email: 'vm3@gm3.com',
    }
  })
}   

async function login(req, res){
const {email, password} = req.body;
const user = await prisma.user.findUnique({
    where: {
        email: email,
        password: password,
    },
});
// if (!user) {
//     // User does not exist
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }

//   // Check if the provided password matches the stored password
//   if (user.password !== password) {
//     // Invalid password
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }

//   // Login successful
//   return res.status(200).json({ message: 'Login successful' });

}

// google OAuth schema for mongoDB
// const userSchema = new Schema({
//     name: String,
//     googleId: {
//       type: String,
//       required: true
//     },
//     foodData: [{
//       type: Schema.Types.ObjectId,
//       ref: 'Food'
//     }],
//     email: String,
//     avatar: String
//   }, {
//     timestamps: true
//   });


async function getUser(req, res) {
    //   await prisma.User.create({
    //     data: {
    //         name: 'Vili3',
    //         email: 'vm3@gm3.com',
    //     }
    //   })
    
        const user = await prisma.user.findUnique({
            where: {
                id: req.body.id,
            }
            
            // include: {
            //     TaskCategory: true,
            //     weeks: true,
            // }
        })
        console.log(user)
    }

    // const result = await prisma.user.findUnique({
    //   where: {
    //     id: 42,
    //   },
    // })
    

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// Prisma Queries:

// findUnique
// findUniqueOrThrow
// findFirst
// findFirstOrThrow
// findMany
// create
// update
// upsert
// delete
// createMany
// updateMany
// deleteMany
// count
// aggregate
// groupBy