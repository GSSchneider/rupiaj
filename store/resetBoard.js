const { fromJS, Map } = require('immutable');

const initialState = require('../src/initialState');

const board = fromJS(initialState().board);

/* *** ACTION TYPES  *** */
const RESET_BOARD = 'RESET_BOARD';

/* *** ACTION CREATORS *** */
const resetBoard = () => {
  const action = {
    type: RESET_BOARD,
    board
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
function resetBoardReducer(state = Map(), action) {
  switch (action.type) {
    case RESET_BOARD: {

      // grab board keys & values
      const [...boardKeys] = action.board.keys();
      const [...boardValues] = action.board.values();

      // interleave the key & values because `Map.set` takes them in key-value order
      const interlovenBoardKeyValues = boardKeys.reduce( (accumulator, currentValue, currentIndex) => {
        return accumulator.concat(currentValue, boardValues[currentIndex]);
      }, []);
      // update the board
      return board.set(...interlovenBoardKeyValues);
    }
    default:
      return state;
  }
}

module.exports = {
  RESET_BOARD,
  resetBoard,
  resetBoardReducer,
};
