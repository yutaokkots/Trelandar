// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

// POST /users

router.post('/', usersCtrl.signUp);

router.post('/login', usersCtrl.login);

module.exports = router;