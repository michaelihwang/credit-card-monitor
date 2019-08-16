import {
  SEND_PUBLIC_TOKEN_BEGIN,
  SEND_PUBLIC_TOKEN_SUCCESS,
  SEND_PUBLIC_TOKEN_FAIL,
} from '../actions/plaid.actions';


const initialState = {
  isFetching: false,
  data: {},
  error: null
};

const plaidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_PUBLIC_TOKEN_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case SEND_PUBLIC_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: false
      };
    case SEND_PUBLIC_TOKEN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}

export default plaidReducer;