const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const app = express();
const {PrismaClient} = require('@prisma/client')
require('dotenv').config();
require('./config/prisma');
require('./config/passport');

// SECRET=SEICOOL


const userRouter = require('./routes/users');

const prisma = new PrismaClient();

app.use(logger('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(require("./config/checkToken"));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(function( req, res, next) {
  req.prisma = prisma;
  next();
});

console.log('here in the server.js')

app.use('/users', userRouter);
app.use('/', require('./routes/index.js'));

// Error handler to check if route exists
app.use(function (req, res) {
  console.log(`route: ${req.path} does not exist`);
  res.status(404, "route does not exist");
});

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
    
// Example route that uses the Prisma client from the middleware
app.get('/users', async (req, res) => {
  const users = await req.prisma.user.findMany();
  res.json(users);
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});

// module.exports = app;