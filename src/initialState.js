'use strict';

const { List, Map } = require('immutable');

const shuffle = require('../utils/createShuffledArrayFromFrequencyObject');
const deal = require('../utils/putListElementsIntoMap');

const areBonusTokensNumbers = true;
const removeFromDeck = true;

const threeCardBonus = {
  1: 2,
  2: 3,
  3: 2
};

const fourCardBonus = {
  4: 2,
  5: 2,
  6: 2
};

const fiveCardBonus = {
  8: 2,
  9: 1,
  10: 2
};

const deck = {
  leather: 10,
  spices: 8,
  silks: 8,
  silver: 6,
  gold: 6,
  diamonds: 6,
  camel: 8 // actually 11 camel cards in the game, but only 8 of them will ever be in the deck, since 3 of them always start out in the market
};

const shuffledDeck = List(shuffle(deck)); // made an immutable List b/c the trackFrequency fn that

module.exports = function getInitialState(/* fromJS */) {
  /* *** INITIAL STATE *** */
  const initialState = {
    // logistics: {
    //   round: 1,
    //   startOfRound: true,
    //   playersTurn: 1,
    // },

    board: {
      // DUMMY DATA -- TO BE DELETED:
      //   foo: 'bar',
      //   happiness: {
      //     is: {
      //       a: {
      //         warm: 'puppy'
      //       }
      //     }
      //   }
      //  }

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
        threeCardBonus: shuffle(threeCardBonus, areBonusTokensNumbers),
        fourCardBonus: shuffle(fourCardBonus, areBonusTokensNumbers),
        fiveCardBonus: shuffle(fiveCardBonus, areBonusTokensNumbers),

        // camel
        camel: 5, // point value thereof

        // seals of excellence
        seals: 3 // number thereof
      },

      cards: {
        deck: shuffledDeck,
        discard: [],
        market: {
          // TODO: cannot let camel number be re-written if any of the 2 cards dealt from the deck are camel cards
          camel: 3,
          ...deal(shuffledDeck, removeFromDeck, 2)
        }
      },

      players: {
        playerOne: {
          hand: deal(shuffledDeck, removeFromDeck, 5),
          herd: 0,
          seals: 0
        },
        playerTwo: {
          hand: deal(shuffledDeck, removeFromDeck, 5),
          herd: 0,
          seals: 0
        }
      }
    }
  };

  return initialState;
};
