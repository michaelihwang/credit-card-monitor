require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes')

// logging middleware
app.use(logger('dev'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', routes);

// route error handling
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const PORT = process.env.PORT || 8080;

// start the server
app.listen(PORT, () => {
  console.log(`App server running on http://localhost:${PORT}`);
});

module.exports = app;