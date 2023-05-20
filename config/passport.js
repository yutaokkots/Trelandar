const passport = require('passport');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = passport;

passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function (accessToken, refreshToken, profile, cb) {
    //   const prisma = req.prisma; // Assuming the Prisma client is attached to the request object
  
      try {
        const user = await prisma.user.findUnique({
          where: {
            googleId: profile.id
          }
        });
        if (user) return cb(null, user);
        
        const newUser = await prisma.user.create({
          data: {
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
          }
        });
        return cb(null, newUser);
      } catch (err) {
        return cb(err);
      }
    }
  ));

// passport.use(new GoogleStrategy(
//     {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_SECRET,
//         callbackURL: process.env.GOOGLE_CALLBACK
//     },
//     async function (accessToken, refreshToken, profile, cb) {

//         const user = await prisma.User.findUnique({
//             where: { 
//                 googleId: profile.id
//             }
//         });
//         if (user) return cb(null, user);
//         user = await prisma.User.create({
//             data: {
//                 name: profile.displayName,
//                 googleId: profile.id,
//                 email: profile.emails[0].value,
//                 avatar: profile.photos[0].value
//             }
//         });
//         return cb(null, user);
//     }
// ));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
    });

passport.deserializeUser(async function(user, cb) {
    cb(null, await prisma.user.findUnique({where: {id: user.id}}));
});



  