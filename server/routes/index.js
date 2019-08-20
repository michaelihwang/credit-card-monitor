const express = require('express');
const { get_access_token, get_balance } = require('../controllers');
const router = express.Router();

// Exchange token flow - exchange a Link public_token for
// an API access_token
// https://plaid.com/docs/#exchange-token-flow
router.post('/get_access_token', get_access_token);

// Retrieve real-time Balances for each of an Item's accounts
// https://plaid.com/docs/#balance
router.post('/get_balance', get_balance);

// route error handling
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;