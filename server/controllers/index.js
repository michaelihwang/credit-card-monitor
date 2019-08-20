const plaid = require('plaid');

// Get .env constants
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY;
const PLAID_ENV = process.env.PLAID_ENV;

// We store the access_token in memory - in production, store it in a secure
// persistent data store
let ACCESS_TOKEN = 'null';

// Initialize the Plaid client
const plaidClient = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  { version: '2019-05-29' }
);

// Exchange token flow - exchange a Link public_token for
// an API access_token
// https://plaid.com/docs/#exchange-token-flow
const get_access_token = (req, res, next) => {
  const PUBLIC_TOKEN = request.body.public_token;
  plaidClient.exchangePublicToken(PUBLIC_TOKEN, (err, tokenRes) => {
    // handle error
    if (err != null) {
      console.log('Could not exchange public_token:\n' + err);
      res.status = 500;
      res.json({
        error: err
      });
    }

    console.log('tokenResponse: ', tokenRes);
    const { access_token, item_id } = tokenRes;

    res.status = 200;
    res.json({
      access_token,
      item_id,
      error: false,
    });
  });
}

// Retrieve real-time Balances for each of an Item's accounts
// https://plaid.com/docs/#balance
const get_balance = (req, res, next) => {
  plaidClient.getBalance(ACCESS_TOKEN, (err, balanceRes) => {
    // handle error
    if (err != null) {
      console.log('Could not get balance:\n' + err);
      res.status = 500;
      res.json({
        error: err
      });
    }

    console.log('balanceResponse: ', balanceRes);
    const { accounts } = balanceRes;

    res.status = 200;
    res.json({
      accounts,
      error: false,
    });
  });
}

module.exports = {
  get_access_token,
  get_balance
};