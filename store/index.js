const { createStore, applyMiddleware, combineReducers } = require('redux');
const { createLogger } = require('redux-logger');
const thunkMiddleware = require('redux-thunk').default;
const { composeWithDevTools } = require('redux-devtools-extension');

const resetBoardReducer = require('./resetBoard').resetBoardReducer;

const reducer = combineReducers({ resetBoard: resetBoardReducer });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger(/* { collapsed: true } */)
));

const store = createStore(reducer, middleware);

module.exports = store;
