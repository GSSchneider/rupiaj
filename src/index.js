const { createStore } = require('redux');
const { resetBoardReducer, resetBoard, RESET_BOARD } = require('../store/resetBoard'); // TODO: make index export hub
const store = require('../store');

module.exports = function app () {
  // To start the game, (re)set( up) the board:
  store.subscribe( () => /* console.log('in store.subscribe, store.getState:', */ store.getState() /* ) */);
  store.dispatch(resetBoard());

  return store.getState();

};
