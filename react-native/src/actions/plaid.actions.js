import axios from 'axios';

export const SEND_PUBLIC_TOKEN_BEGIN = 'SEND_PUBLIC_TOKEN_BEGIN';
export const SEND_PUBLIC_TOKEN_SUCCESS = 'SEND_PUBLIC_TOKEN_SUCCESS';
export const SEND_PUBLIC_TOKEN_FAIL = 'SEND_PUBLIC_TOKEN_FAIL';

// Node.js Back-end
const SERVER = 'http://localhost:8080';

export const sendPublicToken = (token) => (dispatch) => (
  axios.post(`${SERVER}/api/plaid_exchange`, {
    public_token: token
  }).then((res) => dispatch(sendPublicTokenSuccess(res.data)))
    .catch((err) => dispatch(sendPublicTokenFail(err)))
);

export const sendPublicTokenBegin = () => ({
  type: SEND_PUBLIC_TOKEN_BEGIN
});

export const sendPublicTokenSuccess = (data) => ({
  type: SEND_PUBLIC_TOKEN_SUCCESS,
  payload: data
});

export const sendPublicTokenFail = (err) => ({
  type: SEND_PUBLIC_TOKEN_FAIL,
  payload: err
});