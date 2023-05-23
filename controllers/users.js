const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function signUp(req, res) {
  await prisma.User.create({
    data: {
      name: "Vili3",
      email: "vm3@gm3.com",
    },
  });
}

async function login(req, res) {
  const { email, password } = req.body;
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
    },

    // include: {
    //     TaskCategory: true,
    //     weeks: true,
    // }
  });
  console.log(user);
}

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

// {
//     "iss": "https://accounts.google.com",
//     "nbf": 1684882583,
//     "aud": "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
//     "sub": "106260137045428068564",
//     "email": "bty2023team@gmail.com",
//     "email_verified": true,
//     "azp": "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
//     "name": "Better Than Yesterday",
//     "picture": "https://lh3.googleusercontent.com/a/AGNmyxadTHPxRxHHT2U0t6HHuntwHrQDjK5OGp22Jllc=s96-c",
//     "given_name": "Better",
//     "family_name": "Than Yesterday",
//     "iat": 1684882883,
//     "exp": 1684886483,
//     "jti": "bebf10c37ce114cfc2c8b5fac9444e1abb9dd2b5"
//   }
