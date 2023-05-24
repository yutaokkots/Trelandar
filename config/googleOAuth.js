const { OAuth2Client } = require('google-auth-library');

async function verify(client_id, jwtToken) {
    const client = new OAuth2Client(client_id);
    // Call 'verifyIdToken' to
    // verify and decode the token
    const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
    });
    // Get the JSON with all the user info
    const payload = ticket.getPayload();
    // This is a JSON object that contains
    // all the user info
    return payload;
}

module.exports = {
    verify
}


////////
// After you have verified the token, check if the user is already in your user database. 
// If so, establish an authenticated session for the user. 
// If the user isn't yet in your user database, create a new user record 
// from the information in the ID token payload, and establish a session for the user. 
// You can prompt the user for any additional profile information you require 
// when you detect a newly created user in your app.


async function(accessToken, refreshToken, profile, cb) {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) return cb(null, user);
        user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value
        });
        return cb(null, user);
    } catch (err) {
    return cb(err);
    }
}


const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (user) return cb(null, user);
            user = await User.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
            return cb(null, user);
        } catch (err) {
        return cb(err);
        }
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
    });

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId));
});


