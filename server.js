'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const knex = require('knex');
const bcrypt = require('bcrypt');
const request = require('request');
//const parseString = require('xml2js').parseString;
//const fileUpload = require('express-fileupload');

const users = require('./routes/users.js');
const nfl_teams = require('./routes/nfl_teams.js');
const nba_teams = require('./routes/nba_teams.js');
const college_d1s = require('./routes/college_d1s.js');
const mlb_teams = require('./routes/mlb_teams.js');

require('dotenv').config();

const app = express();


const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));


app.use('/users', users);
app.use('/nfl_teams', nfl_teams);
app.use('/nba_teams', nba_teams);
app.use('/college_d1s', college_d1s);
app.use('/mlb_teams', mlb_teams);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, () => {
  console.log('Listening on port', port);
  console.log('postgreSQL is lit.');
});

module.exports = app;
