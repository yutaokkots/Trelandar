// routes/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.js');
const passport = require('passport');

// GET for google authentication
// users/auth/google
router.get('/auth/google', passport.authenticate(
    'google',
    {
        // requesting: 'profile' and 'email'
        scope: ['profile', 'email'],
    }
));

// GET for google OAuth2
// users/oauth2callback
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/',
        failureRedirect: '/'
}))

// users/auth/logout
router.get('/logout', function(req, res){
    req.logOut(function() {
        res.redirect('/')
    })
})

// /users/auth/googleSignin
router.post('/googleSignin', usersCtrl.gSignIn);


// router.post('/', usersCtrl.signUp);

// router.post('/login', usersCtrl.login);

module.exports = router;