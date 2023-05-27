const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const oAuth = require('../config/googleOAuth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const prismaAuth = require('../config/prismaAuth') 


// createJWT(user) -> takes the user information, and includes an expiration key-value to the object
function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

// login() -> takes the user information, searches for the user, and checks the user's password with recorded password
async function login(req, res) {
    try {
        const user = await prisma.user.findUnique({
            where: 
              {email: req.body.email}
        });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json( createJWT(user) );
    } catch {
        res.status(400).json('Bad Credentials');
    }
}


// gSignIn() -> purpose: allow a google-user to sign up/register with a 'single-click' sign-on. 
//  (1) verifies token from front-end using google-auth-library's 'verifyIdToken()' method;
//  (2) then takes the returned payload and passes through login() function located on this page;
//  (3) then takes the returned user and generates a new token using the createJWT() function located on this page;
//  (4) then returns the token as a res response after converting that token to a json format. 
async function gSignIn(req, res) {
    await oAuth.verify(req.body.clientId, req.body.credential)
        .then((payload)=>{
            return glogin(payload)
        }).then((user)=>{
            return createJWT(user)
        }).then((token)=>
            res.json(token)
        ).catch((error) => {
          return error
        })
}

// signUp() -> purpose: allow a user to sign up/register by creating a new password. 
//  (1) passes the req object (req.body) which contains user sign-up infor, and passes through login() function located on this page;
//  (2) then takes the returned user and generates a new token using the createJWT() function located on this page;
//  (3) then returns the token as a res response after converting that token to a json format. 
async function signUp(req, res) {
    await createUser(req.body)
        .then((user)=>{
            return createJWT(user)
        }).then((token)=>
            res.json(token)
        ).catch((error) => {
            return error
        })
  }

// ^ add error handling for NOT automatically creating a json token with empty user
// information. 

// checkUser() -> checks the db for a user's email existing
async function checkUser(payload){
    return await prisma.user.findUnique({
        where: {
            email: payload.email
        }
  })
}


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

// createUser(payload) -> if the user exists, return the user; 
//  if user does not exist, create a new user with the information provided, and return the user
async function createUser(payload){
    try {
        const user = await checkUser(payload)
        if (user) return user;
        const encryptedPayload = await prismaAuth.encryptPassword(payload)
        const newUser = await prisma.user.create({
            data: {
                name: encryptedPayload.name,
                email: encryptedPayload.email,
                password: encryptedPayload.password
            }
        })
        console.log(newUser)
        return newUser
    } catch(err){
        return err
    }
}


// glogin(payload) -> if the user exists, return the user; 
//  if user does not exist, create a new user with the information provided, and return the user
async function glogin(payload) {
    try {
      const user = await checkUser(payload)
      if (user) return user;
      const newUser = await prisma.user.create({
          data: {
              name: payload.name,
              email: payload.email,
              avatar: payload.picture
          },
          include: {
            TaskCategory: true,
            weeks: true,
        }
        })
    return newUser;
  } catch (err) {
    return err;
  }
}


async function getUser(req, res) {
  const user = await prisma.user.findUnique({
    where: {
        id: req.body.id,
    },
    include: {
        TaskCategory: true,
        weeks: true,
    }
  });
  console.log(user);
}



// model TaskCategory{
//     id          Int             @id @default(autoincrement())
//     name        String          @db.VarChar(50) 
//     detail      String          @db.VarChar(500)
//     color       String          @db.VarChar(30) 
//     userId      Int
//     user        User            @relation(fields: [userId], references: [id])
//     tasks       Task[]
//   }

module.exports = {
    gSignIn,
    getUser,
    signUp,
    login,
 }

  //module.exports ={googleSignIn:googleSignIn}

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

// const result = await prisma.user.findUnique({
//   where: {
//     id: 42,
//   },
// })

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

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

// "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWE1ZWY1YjEyNjIzYzkxNjcxYTcwOTNjYjMyMzMzM2NkMDdkMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODQ4ODI1ODMsImF1ZCI6IjYzMTY4NjA3NDQxOC0xbGU4cW1uZHRpNDBqczF1ZzAwdTJubWllcGdpYmRway5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjI2MDEzNzA0NTQyODA2ODU2NCIsImVtYWlsIjoiYnR5MjAyM3RlYW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjYzMTY4NjA3NDQxOC0xbGU4cW1uZHRpNDBqczF1ZzAwdTJubWllcGdpYmRway5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJCZXR0ZXIgVGhhbiBZZXN0ZXJkYXkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4YWRUSFB4UnhISFQyVTB0NkhIdW50d0hyUURqSzVPR3AyMkpsbGM9czk2LWMiLCJnaXZlbl9uYW1lIjoiQmV0dGVyIiwiZmFtaWx5X25hbWUiOiJUaGFuIFllc3RlcmRheSIsImlhdCI6MTY4NDg4Mjg4MywiZXhwIjoxNjg0ODg2NDgzLCJqdGkiOiJiZWJmMTBjMzdjZTExNGNmYzJjOGI1ZmFjOTQ0NGUxYWJiOWRkMmI1In0.MEBjO9mpKX2N4kROc42PsiyLpSou6jSwtonqM1YFpxpX6jg4Z-Ip7799vbO4ZM97QDOAd-HKZo0kB-wJQsOiLCuRO7l71UgCc3m1AyHLjjXXP4_5f03CvO8AwRYaDoj-lS15XyOi4AhV8oJgWL-PzHJF7GQJ92oo2ENSJjU3gwdvZVcMM3PbiDD0TNe9gGBunGSHMVfcr3fUaVLxxz_ZjeFPuWkh3FwQnBpcy_fTlGNhJCDmYe_PmxGSeToDTNzQHrXURqFcStxe911pbckzgFZ2IErJpxezMx32rlyjwV2aSS5r5ojrgBL5a0aioo_UeO5C0RMxqoRSPn9dQ5dasw"

