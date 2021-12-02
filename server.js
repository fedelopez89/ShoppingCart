'use strict'

const express = require('express');
const path = require('path');

// Webpack
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('./webpack.config');

// Initializing packages
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlwares
app.use(webpackDev(webpack(config)));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
console.log("dirname", __dirname);

// dirname = /Users/fede/Documents/fs-software-engineer-challenge/public ==> index.html

// routes
/* app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api', (req, res) => {
  res.json({ api: 'works!' });
});
 */

console.log('Starting Server...');

// starting the server
app
  .listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  })
  .on('error', (error) => {
    console.log(error.message);
    console.log(
      `Listen method failed. Unable to listen on port ${app.get('port')}`
    );
  });
