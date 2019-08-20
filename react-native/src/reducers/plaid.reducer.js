import {
  SEND_PUBLIC_TOKEN_SUCCESS,
  SEND_PUBLIC_TOKEN_FAIL,
  FETCH_LATEST_BALANCE_SUCCESS,
  FETCH_LATEST_BALANCE_FAIL,
} from '../actions/plaid.actions';

const initialState = {
  isFetching: false,
  access_token: 'null',
  accounts: [],
  error: null
};

const plaidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_PUBLIC_TOKEN_SUCCESS:
      return {
        ...state,
        access_token: action.access_token,
        item_id: action.item_id,
        error: action.error,
        isFetching: false,
      };
    case SEND_PUBLIC_TOKEN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default plaidReducer;