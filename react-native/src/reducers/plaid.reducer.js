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
        isFetching: false,
        access_token: action.access_token,
        item_id: action.item_id,
        error: action.error,
      };
    case SEND_PUBLIC_TOKEN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCH_LATEST_BALANCE_SUCCESS:
      // filter out non-credit cards
      const accounts = action.accounts.filter(
        item => item.subtype === 'credit card'
      )
      return {
        ...state,
        isFetching: false,
        accounts,
        error: false
      };
    case FETCH_LATEST_BALANCE_FAIL:
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