# Credit Card Monitor App
React Native with Redux App for .

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

### API Endpoints

### API Response

## License
MIT License Copyright © 2019 Michael Hwang
