// server.js
//"start": "NODE_ENV=development webpack && babel-node --presets @babel/env server.js",
console.log('This is a message from server.')

import express from 'express';
import path from 'path'

import constants from './app/config/constants';
import './app/config/database';
import middlewaresConfig from './app/config/middlewares';
import errorHandler from './app/config/errorHandling'

const app = express();

middlewaresConfig(app)

app.use(express.static('public'));

app.get("/*", function(request, response) {
  // response.redirect('/')
  response.sendFile(path.join(__dirname + '/public/index.html'));
});

errorHandler(app)

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