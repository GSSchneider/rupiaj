const { fromJS } = require('immutable');
const getInitialState = require('../src/game');

/* *** ACTION TYPES  *** */
const RESET_BOARD = 'RESET_BOARD';
const { board } = getInitialState();
// const board = fromJS(getInitialState());

/* *** ACTION CREATORS *** */
const resetBoard = () => {
  return ({ type: RESET_BOARD, board });
}; // fromJS( getInitialState() )

// function resetTokens() {
//   if (this.startOfRound && this.round === 1) return this.startingTokens;
//   if (this.startOfRound && this.round !== 1) {
//     this.startingTokens.seals.pop();
//     return this.startingTokens;
//   }
// }

/* *** REDUCERS *** */
function resetBoardReducer(state = { board: { from: 'reducer' } }, action) {
  switch (action.type) {
    case RESET_BOARD:
      return {
        ...state,
        board: action.board
      };
    default:
      return state;
  }
}

module.exports = {
  RESET_BOARD,
  resetBoard,
  resetBoardReducer,
};
