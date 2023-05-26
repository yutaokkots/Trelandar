// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const passport = require('passport');

// All routes begin with /

console.log('inside the index route')

// GET for google authentication
router.get('/auth/google', passport.authenticate(
    'google',
    {
        // requesting: 'profile' and 'email'
        scope: ['profile', 'email'],
    }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/',
        failureRedirect: '/'
}))


router.get('/logout', function(req, res){
    req.logOut(function() {
        res.redirect('/')
    })
})


// router.post('/', usersCtrl.signUp);

// router.post('/login', usersCtrl.login);

module.exports = router;