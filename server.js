const express = require('express');
const path = require('path');
const logger = require('morgan');
// require('dotenv').config();
// require('./config/database')

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
    

const port = process.env.PORT || 3000;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});