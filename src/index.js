const { createStore } = require('redux');
const { resetBoardReducer } = require('../store/resetBoard'); // TODO: make index export hub

const store = createStore(resetBoardReducer);

console.log('store.getState:', store.getState());

// const setUpBoard = () => {
//   const { board } = store.getState();
//   console.log('there be a board in the store!  here it is:', board);
// };

store.subscribe( () => console.log('store.getState:', store.getState() ));
