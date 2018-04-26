const { fromJS } = require('immutable');

/* *** INITIAL STATE *** */
const initialState = {
  logistics: {
    round: 1,
    startOfRound: true,
    playersTurn: 1,
  },

  board: {
    tokens: {
      // common goods
      leather: [4, 3, 2, 1, 1, 1, 1, 1, 1],
      spices: [5, 3, 3, 2, 2, 1, 1],
      silks: [5, 3, 3, 2, 2, 1, 1],

      // precious goods
      silver: [5, 5, 5, 5, 5],
      gold: [6, 6, 5, 5, 5],
      diamonds: [7, 7, 5, 5, 5],

      // bonuses
      threeCardBonus: {
        1: 2,
        2: 3,
        3: 2
      },
      fourCardBonus: {
        4: 2,
        5: 2,
        6: 2
      },
      fiveCardBonus: {
        8: 2,
        9: 1,
        10: 2
      },

      // camel
      camel: 5,

      // seals of excellence
      seals: [0, 0, 0]
    },

    cards: {
      deck: [],
      discard: [],
      market: {},
    },

    players: {
      playerOne: {
        hand: {},
        herd: 0,
        seals: 0
      },
      playerTwo: {
        hand: {},
        herd: 0,
        seals: 0
      }
    }
  },
};


/* *** ACTION TYPES  *** */
const RESET_BOARD = 'RESET_BOARD';

/* *** ACTION CREATORS *** */
function resetBoard(board = fromJS(startingBoard)) {
  const action = { type: RESET_BOARD, board };
  return action;
}

function resetTokens() {
  if (this.startOfRound && this.round === 1) return this.startingTokens;
  if (this.startOfRound && this.round !== 1) {
    this.startingTokens.seals.pop();
    return this.startingTokens;
  }
}

/* *** REDUCERS *** */
function reducer(state = initialState, action) {
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

module.exports = reducer;
