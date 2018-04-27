const { createStore } = require('redux');
const { resetBoardReducer, resetBoard, RESET_BOARD } = require('../store/resetBoard'); // TODO: make index export hub

const store = createStore(resetBoardReducer);

console.log('store.getState before subscribing:', store.getState());
store.subscribe( () => console.log('in store.subscribe, store.getState:', store.getState() ));
console.log('store.getState after subscribing:', store.getState());
store.dispatch(resetBoard());
console.log('store.getState after dispatching:', store.getState());
// store.subscribe( () => console.log('subscribing store.getState AFTER dispatching:', store.getState() ));


// const setUpBoard = () => {
//   const { board } = store.getState();
//   console.log('there be a board in the store!  here it is:', board);
// };




