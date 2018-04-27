// const { fromJS } = require('immutable');
const initialState = require('../src/freshBoard');
// console.log('freshBoard().board:', freshBoard().board);

// /* *** INITIAL STATE *** */
// const initialState = {
//   // board: {
//     from: 'initialState'
//   // }
// };

/* *** ACTION TYPES  *** */
const RESET_BOARD = 'RESET_BOARD';
// const { board } = getInitialState();
// const board = fromJS(getInitialState());

/* *** ACTION CREATORS *** */
const resetBoard = () => {
  const action = {
    type: RESET_BOARD,
    board: initialState().board
  };
  return (action);
}; // fromJS( getInitialState() )

// function resetTokens() {
//   if (this.startOfRound && this.round === 1) return this.startingTokens;
//   if (this.startOfRound && this.round !== 1) {
//     this.startingTokens.seals.pop();
//     return this.startingTokens;
//   }
// }

/* *** REDUCERS *** */
function resetBoardReducer(state = {}, action) {
  switch (action.type) {
    case RESET_BOARD:
      return action.board;
    default:
      return state;
  }
}

module.exports = {
  RESET_BOARD,
  resetBoard,
  resetBoardReducer,
};
