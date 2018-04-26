const { createStore, applyMiddleware, combineReducers } = require('redux');
const createLogger = require('redux-logger');
const thunkMiddleware = require('redux-thunk');
const { composeWithDevTools } = require('redux-devtools-extension');

const reducer = combineReducers({});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

module.exports = store;
