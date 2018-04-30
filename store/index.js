const { createStore, applyMiddleware, combineReducers } = require('redux');
// const { combineReducers } = require('redux-immutable'); // TO DO:  Figure out why the combineReducers from redux-immutable seems to break all the things
// const { createLogger } = require('redux-logger');
const createCLILogger = require('redux-cli-logger').default;
const thunkMiddleware = require('redux-thunk').default;
const { composeWithDevTools } = require('redux-devtools-extension');

const board = require('./resetBoard').resetBoardReducer;

// from redux-cli-logger, modified so it actually works:
const CLILoggerOptions = {
  downArrow: '▼',
  rightArrow: '▶',
  messageColor: 'yellow',
  prevColor: 'grey',
  actionColor: 'blue',
  nextColor: 'green',
  log: console.log,
  // when non-null, only prints if predicate(getState, action) is truthy
  predicate: null,
  // useful to trim parts of the state atom that are too verbose
  stateTransformer: (state) => state,
  // useful to censor private messages (containing password, etc.)
  actionTransformer: (action) => action,
};

const reducer = combineReducers({ board });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createCLILogger(CLILoggerOptions)
));

const store = createStore(reducer, middleware);

module.exports = store;
