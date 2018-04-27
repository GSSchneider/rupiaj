const { expect } = require('chai');
const { fromJS } = require('immutable');
// const getInitialState = require('./game');
const app = require('./index');

describe('Game Setup', function () {
  describe('The Board', function () {
    const initialState = fromJS({
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
    });

    const initialStateResult = app().board;

    it('should return the initial state of the board', function () {
      expect(initialStateResult).to.deep.equal(initialState);
    });

    // describe('The Tokens (i.e., the supply)', function () {

    //   xit('should create all the goods tokens (arranged in descending order), the bonus tokens, the seals of excellence, and the camel token', function () {
    //     // banal goods
    //     expect(setUpTokensResult.leather).to.deep.equal([4, 3, 2, 1, 1, 1, 1, 1, 1]);
    //     expect(setUpTokensResult.spices).to.deep.equal([5, 3, 3, 2, 2, 1, 1]);
    //     expect(setUpTokensResult.silks).to.deep.equal([5, 3, 3, 2, 2, 1, 1]);

    //     // precious goods
    //     expect(setUpTokensResult.silver).to.deep.equal([5, 5, 5, 5, 5]);
    //     expect(setUpTokensResult.gold).to.deep.equal([6, 6, 5, 5, 5]);
    //     expect(setUpTokensResult.diamonds).to.deep.equal([7, 7, 5, 5, 5]);

    //     // bonuses
    //     expect(setUpTokensResult.threeCardBonus).to.deep.equal({
    //       1: 2,
    //       2: 3,
    //       3: 2
    //     });
    //     expect(setUpTokensResult.fourCardBonus).to.deep.equal({
    //       4: 2,
    //       5: 2,
    //       6: 2
    //     });
    //     expect(setUpTokensResult.fiveCardBonus).to.deep.equal({
    //       8: 2,
    //       9: 1,
    //       10: 2
    //     });

    //     // camels
    //     expect(setUpTokensResult.camel).to.deep.equal(5);

    //     // seal of excellence
    //     expect(setUpTokensResult.seals).to.deep.equal([0, 0, 0]);
    //   });
    // });

    // it('the bonus tokens are in their respective stacks');
  });

  // describe('The Cards (i.e., the market)', function () {
  //   it('should have a deck, a discard pile, and a market');

  //   it(
  //     'should shuffle the deck (52 cards [i.e., sans 3 camels] in a random sequence)'
  //   );

  //   it('should set up an empty discard pile');

  //   it(
  //     'should set up the market with 3 camels cards and the top 2 cards from the shuffled deck'
  //   );
  // });

  // describe('The Players', function () {
  //   describe('dealCardsToPlayers()', function () {
  //     it('should deal 5 cards to each player from the deck');

  //     it('should alternate in its dealing');

  //     it('should put any camels dealt into their herd');
  //   });
  // });
});

// describe('Game Play', function () {
//   describe('General Mechanics', function () {
//     it('should have only 2 players');

//     it('players should alternate turns');

//     it(
//       'the player with the most number of points at the end of a round should win that round'
//     );

//     it('the player with 2 (out of 3) seals of excellence should win the game');

//     it(
//       'the market should always have 5 (and only 5) cards by the end of a turn'
//     );

//     it('when acquired, camels should go into herds, not hands');

//     it(
//       'a round should end immediately when either the third goods tokens pile is depleted or the market cannot be refilled from the deck'
//     );

//     it(
//       "the game should end immediately upon a single player's acquisition of their 2nd seal of excellence"
//     );

//     describe('Shown Information', function () {
//       it('the market should always be visible to both players');

//       it(
//         'the remaining goods tokens -- and their values -- should always be visible to both players'
//       );

//       it('the number bonus tokens should always be visible to both players');

//       it(
//         'only whether a player has any camels should be visible to the other player'
//       );
//     });

//     describe('Hidden Information', function () {
//       it(
//         'the cards in the deck should always be hidden only until they are revealed when refilling the market'
//       );

//       it(
//         "the values of the bonus tokens in the supply should always be hidden from both players (only upon award for a sale does a player get to see a bonus token's value)"
//       );
//     });

//     describe('Private Information', function () {
//       it("each player's hand should be secret from the other player");

//       it(
//         'the number of camels a player has, other than whether 0 or > 0, should be hidden from the other player'
//       );

//       it('a player should be able to see the values of their bonus tokens');

//       it(
//         "the values of a player's bonus tokens should be secret from the other player"
//       );
//     });
//   });

//   describe('Player Turn', function () {
//     // afterEach(/* Refill the market */);

//     describe('Buy', function () {
//       describe('Take all the camels', function () {
//         it(
//           "should remove all the camels from the market and put them in the player's herd"
//         );
//       });

//       describe('Take a single card for free', function () {
//         it(
//           "should remove a single goods card from the market and put it in the player's hand"
//         );

//         it(
//           'should not be an option if the player already has 7 cards in their hand'
//         );
//       });

//       describe('Exchange 2+ goods cards', function () {
//         it(
//           "should exchange 2 or more goods cards from the player's hand with 2 or more goods cards from the market"
//         );

//         it('should be such that none of exchanged goods are the same');
//       });
//     });

//     describe('Sell', function () {
//       it('should be illegal to sell more than one type of good');

//       it(
//         "should remove cards from the player's hand and put them in the discard pile"
//       );

//       it(
//         'should remove the corresponding number of tokens from the equivalent goods pile -- in order!'
//       );

//       it(
//         'should award the player a bonus token based on the size of the set of goods the player is selling (i.e., 3-card bonus for 3 cards, 4-card bonus for 4 cards, 5-card bonus for 5+ cards)'
//       );

//       it(
//         "should update the player's total points with the total value of all the tokens they receive for that sale"
//       );

//       it(
//         'should award the player only the number of goods tokens available in the actual supply'
//       );

//       it(
//         'should be illegal to sell only one precious good (silver, gold, diamond) card at a time'
//       );
//     });
//   });

//   describe('End of Turn', function () {
//     it(
//       'should refill the market with cards drawn from the deck, up to 5 cards'
//     );

//     it(
//       'should immediately terminate the round if the market cannot be refilled because the deck has been depleted'
//     );
//   });
// });
