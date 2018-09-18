// server.js
//"start": "NODE_ENV=development webpack && babel-node --presets @babel/env server.js",
console.log('This is a message from server.')

import express from 'express';

import constants from './app/config/constants';
import './app/config/database';
import middlewaresConfig from './app/config/middlewares';

const app = express();


/* FOR REACT TESTING ONLY */
/* FOR REACT TESTING ONLY */
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
/* FOR REACT TESTING ONLY */
/* FOR REACT TESTING ONLY */


middlewaresConfig(app);

const server = app.listen(constants.PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(
			`
    Server is running on port: ${constants.PORT}
    ---
    Running on ${process.env.NODE_ENV}
    `,
		);
    console.log(constants);
  }
});

// Stop server is required to stop it for the test time
function stop() {
  server.close();
}

module.exports = server
module.exports.stop

/*
// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/error.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
*/