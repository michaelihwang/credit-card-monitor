
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [thunk];

// logger should be the last middlewear to be pushed so we can listen to everything
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer, applyMiddleware(...middlewares)
);

export default store;