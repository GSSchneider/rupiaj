const useChaiImmutable = require('chai').use(require('chai-immutable'));
const { expect } = require('chai');
const { fromJS, List } = require('immutable');
const app = require('./index');
const putListElementsIntoMap = require('../utils/putListElementsIntoMap');

describe('Game Setup', function() {
  const initialState = app().board;

  describe('The Board', function() {
    // FOR REFERENCE ONLY (actual initialState is in ./initialState.js) -- TO BE DELETED:
    // const initialState = {
    //   tokens: {
    //     // common goods
    //     leather: [4, 3, 2, 1, 1, 1, 1, 1, 1],
    //     spices: [5, 3, 3, 2, 2, 1, 1],
    //     silks: [5, 3, 3, 2, 2, 1, 1],

    //     // precious goods
    //     silver: [5, 5, 5, 5, 5],
    //     gold: [6, 6, 5, 5, 5],
    //     diamonds: [7, 7, 5, 5, 5],

    //     // bonuses => each of these are turned into shuffled arrays when initialized
    //     threeCardBonus: {
    //       1: 2,
    //       2: 3,
    //       3: 2
    //     },
    //     fourCardBonus: {
    //       4: 2,
    //       5: 2,
    //       6: 2
    //     },
    //     fiveCardBonus: {
    //       8: 2,
    //       9: 1,
    //       10: 2
    //     },

    //     // camel
    //     camel: 5,

    //     // seals of excellence
    //     seals: 3
    //   },

    //   cards: {
    //     deck: {
    //      leather: 10,
    //      silks: 8,
    //      spices: 8,
    //      silver: 6,
    //      gold: 6,
    //      diamonds: 6,
    //      camel: 8
    //     },
    //     discard: [],
    //     market: {
    //      camel: 3
    //      <2 other cards from the shuffled deck>
    //     },
    //   },

    //   players: {
    //     playerOne: {
    //       hand: {},
    //       herd: 0,
    //       seals: 0
    //     },
    //     playerTwo: {
    //       hand: {},
    //       herd: 0,
    //       seals: 0
    //     }
    //   }
    // };

    // TESTING -- TO BE DELETED:
    // it('should return the initial state of the board', function () {
    //   expect(initialState).to.deep.equal(initialState);
    // });

    describe('The Tokens (i.e., the supply)', function() {
      describe('resetTokens()', function() {
        it('should reset all the goods tokens (arranged in descending order), the bonus tokens, the seals of excellence, and the camel token', function() {
          /* BANAL GOODS */
          const leather = initialState.getIn(['tokens', 'leather']);
          const spices = initialState.getIn(['tokens', 'spices']);
          const silks = initialState.getIn(['tokens', 'silks']);

          expect(leather).to.deep.equal(fromJS([4, 3, 2, 1, 1, 1, 1, 1, 1]));
          expect(spices).to.deep.equal(fromJS([5, 3, 3, 2, 2, 1, 1]));
          expect(silks).to.deep.equal(fromJS([5, 3, 3, 2, 2, 1, 1]));

          /* PRECIOUS GOODS */
          const silver = initialState.getIn(['tokens', 'silver']);
          const gold = initialState.getIn(['tokens', 'gold']);
          const diamonds = initialState.getIn(['tokens', 'diamonds']);

          expect(silver).to.deep.equal(fromJS([5, 5, 5, 5, 5]));
          expect(gold).to.deep.equal(fromJS([6, 6, 5, 5, 5]));
          expect(diamonds).to.deep.equal(fromJS([7, 7, 5, 5, 5]));

          /* BONUSES */
          const threeCardBonus = initialState
            .getIn(['tokens', 'threeCardBonus'])
            .toJS();
          const fourCardBonus = initialState
            .getIn(['tokens', 'fourCardBonus'])
            .toJS();
          const fiveCardBonus = initialState
            .getIn(['tokens', 'fiveCardBonus'])
            .toJS();

          expect(putListElementsIntoMap(threeCardBonus)).to.deep.equal({
            1: 2,
            2: 3,
            3: 2
          });
          expect(putListElementsIntoMap(fourCardBonus)).to.deep.equal({
            4: 2,
            5: 2,
            6: 2
          });
          expect(putListElementsIntoMap(fiveCardBonus)).to.deep.equal({
            8: 2,
            9: 1,
            10: 2
          });

          /* CAMEL */
          const camel = initialState.getIn(['tokens', 'camel']);

          expect(camel).to.deep.equal(5);

          /* SEALS */
          const seals = initialState.getIn(['tokens', 'seals']);

          expect(seals).to.deep.equal(3);
        });

        it('the bonus tokens should be shuffled in their respective stacks'); // they ARE, but how to test this?  spyOn some fns to see if they've been called?
      });
    });
  });

  describe('The Cards', function() {
    describe('The deck (i.e., the draw pile)', function() {
      it('should have 52 cards to start');

      it(
        'should have 8 camels to start (11 minus the 3 automatically placed in the market)'
      );

      it('should be shuffled (i.e., be a random sequence)');
    });

    describe('The discard pile', function() {
      it('should be empty', function() {
        const discard = initialState.getIn(['cards', 'discard']);

        expect(discard).to.deep.equal(fromJS([]));
      });
    });

    describe('The market', function() {
      it('should have 5 cards');

      it(
        'should have 3 camel cards and the top 2 cards from the top of the shuffled deck'
      );

      it('the deck should now have 50 cards');
    });
  });

  describe('The Players', function() {
    describe('dealCardsToPlayers()', function() {
      it(
        'should deal 5 cards to each player from the top of the shuffled deck'
      );

      it('should put any camels dealt from their hand to their herd');

      it('the deck should now have 40 cards');
    });
  });
});

describe('Game Play', function() {
  describe('General Mechanics', function() {
    it('should have only 2 players');

    it('players should alternate turns');

    it(
      'the market should always have 5 (and only 5) cards by the end of a turn, unless the turn is prematurely ended by the activation of the cannot-refill-the-market-due-to-depleted-deck end-of-round condition'
    );

    it('player hand size should always be <= 7');

    it(
      "when acquired, camels should go into herds, not hands (and so camels should never count against a player's hand size limit)"
    );

    it('herds should consist of only camels (or none -- that is, be empty)');
  });

  describe('Shown Information', function() {
    it('the market should always be visible to both players');

    it(
      'the remaining goods tokens -- and their values -- should always be visible to both players'
    );

    it(
      'given 6 goods tokens in descending order in their respective stack/pile, they should always be in one of the following configurations: [A, B, C, D, E, F], [B, C, D, E, F], [C, D, E, F], [D, E, F], [E, F], [F], [] (empty)'
    );

    it(
      'the number bonus tokens should always be visible to both players -- but not their values'
    );

    it(
      'only whether a player has any camels should be visible to the other player (not the actual number of camels)'
    );
  });

  describe('Hidden Information', function() {
    it(
      'the cards in the deck should always be hidden only until they are revealed when refilling the market'
    );

    it(
      "the values of the bonus tokens in the supply should always be hidden from both players (only upon award for a sale does a player get to see a bonus token's value)"
    );
  });

  describe('Private Information', function() {
    it("each player's hand should be secret from the other player");

    it(
      'the number of camels a player has, other than whether 0 or > 0, should be hidden from the other player'
    );

    it('a player should be able to see the values of their own bonus tokens');

    it(
      "the values of a player's bonus tokens should be secret from the other player"
    );
  });

  describe('Player Turn', function() {
    // afterEach(/* Refill the market */);

    describe('Buy', function() {
      describe('Take all the camels', function() {
        it(
          "should remove all the camels from the market and put them in the player's herd"
        );
      });

      describe('Take a single goods card for free', function() {
        it(
          "should remove a single goods card from the market and put it in the player's hand"
        );

        it(
          'should not be an option if the player already has 7 cards in their hand'
        );
      });

      describe('Exchange 2+ goods cards', function() {
        it(
          "should exchange 2 or more goods/camels from the player's hand/herd with an equal number of goods from the market"
        );

        it('none of exchanged goods should be of the same type');

        it('none of the goods cards taken from the market should be camels');

        it(
          'should not be an option if the player already has 7 cards in their hand'
        );
      });
    });

    describe('Sell', function() {
      it('should be illegal to sell more than one type of good');

      it(
        "should remove goods of one type from the player's hand and put them in the discard pile"
      );

      it(
        'should remove the corresponding number of tokens from the equivalent goods pile -- in order!'
      );

      it(
        'should award the player a bonus token based on the size of the set of goods the player is selling (i.e., 3-card bonus for 3 cards, 4-card bonus for 4 cards, 5-card bonus for 5+ cards)'
      );

      it(
        "should update the player's total rupees (points) with the total value of all the tokens they receive for that sale"
      );

      it(
        'should award the player only the number of goods tokens available in the actual supply'
      );

      it(
        'should be illegal to sell only one precious good (silver, gold, diamond) card at a time'
      );
    });
  });

  describe('End of Turn', function() {
    it(
      'should refill the market back up to 5 cards, drawn from the deck as needed'
    );

    it(
      'should immediately end the round if the market cannot be refilled because the deck has been depleted'
    );
  });

  describe('End of Round', function() {
    it(
      'should award the camel token to the player with the most camels in their herd'
    );

    it('should award a seal to the player with the most rupees (points)');

    it(
      'should, in the event of a tie in rupees (points), award a seal to the player with the most bonus tokens'
    );

    it(
      'should, in the event of a tie in rupees (points) AND number of bonus tokens, award a seal to the player with the most goods tokens'
    );

    it(
      "should end the game immediately if the awarded seal is that player's second seal"
    );
  });
});
