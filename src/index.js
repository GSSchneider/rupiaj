const { createStore } = require('redux');
const { resetBoardReducer, resetBoard, RESET_BOARD } = require('../store/resetBoard'); // TODO: make index export hub

const store = createStore(resetBoardReducer);

console.log('store.getState before dispatching resetBoard():', store.getState());
store.dispatch(resetBoard());
console.log('store.getState AFTER dispatching resetBoard():', store.getState());

// const setUpBoard = () => {
//   const { board } = store.getState();
//   console.log('there be a board in the store!  here it is:', board);
// };

store.subscribe( () => console.log('subscribing store.getState before dispatching:', store.getState() ));
//
// store.subscribe( () => console.log('store.getState AFTER dispatching:', store.getState() ));

