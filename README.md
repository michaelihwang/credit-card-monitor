# Credit Card Monitor
React Native with Redux App that consolidates all linked credit card balances in one place. The app uses Plaid's APIs to securely connect and fetch latest balances.

![](example.gif)

This project was bootstrapped with Expo `$ expo init credit-card-monitor-app`.

## Front-End
### React, React Native, and Redux
#### Version
* [react](https://github.com/facebook/react): 16.8.3
* [react-native](https://github.com/facebook/react-native): 0.57.1
* [redux](https://github.com/reduxjs/redux): 4.0.4

#### Dependencies
* [axios](https://github.com/axios/axios): 0.19.0
* [expo](https://github.com/expo/expo): 34.0.1
* [prop-types](https://github.com/facebook/prop-types): 15.7.2
* [react-navigation](https://github.com/react-navigation/react-navigation): 3.11.0
* [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler): 1.3.0
* [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated): 1.1.0
* [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet): 0.12.0
* [react-redux](https://github.com/reduxjs/react-redux): 7.1.0
* [redux-logger](https://github.com/LogRocket/redux-logger): 3.0.6
* [redux-thunk](https://github.com/reduxjs/redux-thunk): 2.3.0

## Back-End
### Express and Node
#### Version
* [express](https://github.com/expressjs/express): 4.17.1
* [node](https://github.com/nodejs/node): 10.16.1

#### Dependencies
* [body-parser](https://github.com/expressjs/body-parser): 1.19.0
* [dotenv](https://github.com/motdotla/dotenv): 8.1.0
* [morgan](https://github.com/expressjs/morgan): 1.9.1
* [plaid](https://github.com/plaid/plaid-node): 4.2.0

## Plaid API
This app uses `Plaid Link` to get a `public_token`, which is then exchanged for a `access_token` via the back-end server. Only then would the user be able to see the latest balances on their linked cards.

### Developer Account

### API Response
The following is the /balance response payload format. All endpoints return JSON format.

```
POST /api/get_balance 200 708.644 ms - 2381
balanceResponse: { accounts:
   [ { account_id: '8Xeq8Zn46MtP5KQRnNLGFNkq4XpDNQFwoyRyn',
       balances: [Object],
       mask: '3333',
       name: 'Plaid Credit Card',
       official_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
       subtype: 'credit card',
       type: 'credit' },
     ... ],
  item:
   { available_products:
      [ 'assets',
        'auth',
        'balance',
        'credit_details',
        'identity',
        'income',
        'investments',
        'liabilities' ],
     billed_products: [ 'transactions' ],
     error: null,
     institution_id: 'ins_3',
     item_id: '4mNGgZEw67uAKRJx9XdNUyb59zVXDofdb3LnJ',
     webhook: '' },
  request_id: 'QuHn6e4sQKuBC7a',
  status_code: 200 }
```

Take a look at their [Documentation](https://plaid.com/docs/#balance) for more information.

## License
MIT License Copyright © 2019 Michael Hwang
