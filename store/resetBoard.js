/* *** ACTION TYPES  *** */
const RESET_BOARD = 'RESET_BOARD';

/* *** ACTION CREATORS *** */
const resetBoard = (board = fromJS( getInitialState() )) => ({ type: RESET_BOARD, board });

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
      return {
        ...state,
        board: action.board
      };
    default:
      return state;
  }
}

module.exports = resetBoardReducer;
