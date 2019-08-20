import axios from 'axios';

export const SEND_PUBLIC_TOKEN_SUCCESS = 'SEND_PUBLIC_TOKEN_SUCCESS';
export const SEND_PUBLIC_TOKEN_FAIL = 'SEND_PUBLIC_TOKEN_FAIL';
export const FETCH_LATEST_BALANCE_SUCCESS = 'FETCH_LATEST_BALANCE_SUCCESS';
export const FETCH_LATEST_BALANCE_FAIL = 'FETCH_LATEST_BALANCE_FAIL';

// Node.js Back-end server
const SERVER = 'http://localhost:8080';

// send public_token to the back-end server for access_token
export const sendPublicToken = (public_token) => (dispatch) => (
  axios.post(`${SERVER}/api/get_access_token`, {
    public_token
  }).then((res) => dispatch(sendPublicTokenSuccess(res.data)))
    .catch((err) => dispatch(sendPublicTokenFail(err)))
);

export const sendPublicTokenSuccess = ({ access_token, item_id, error }) => ({
  type: SEND_PUBLIC_TOKEN_SUCCESS,
  access_token,
  item_id,
  error
});

export const sendPublicTokenFail = (err) => ({
  type: SEND_PUBLIC_TOKEN_FAIL,
  error: err
});

// fetch latest account balances via back-end server
export const fetchLatestBalance = (access_token) => (dispatch) => (
  axios.post(`${SERVER}/api/get_balance`, {
    access_token
  }).then((res) => dispatch(fetchLatestBalanceSuccess(res.data)))
    .catch((err) => dispatch(fetchLatestBalanceFail(err)))
);

export const fetchLatestBalanceSuccess = ({ accounts }) => ({
  type: FETCH_LATEST_BALANCE_SUCCESS,
  accounts
});

export const fetchLatestBalanceFail = (err) => ({
  type: FETCH_LATEST_BALANCE_FAIL,
  error: err
});