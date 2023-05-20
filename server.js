const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/database');
require('./config/passport');

SECRET=SEICOOL

const app = express();

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

// Error handler to check if route exists
app.use(function (req, res) {
    console.log(`route: ${req.path} does not exist`);
    res.status(404, "route does not exist");
  });

app.use('/users', require('./routes/users'));

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
    

const port = process.env.PORT || 3000;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});