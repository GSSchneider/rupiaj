*** RUPIAJ ***

eot -- end of turn
eor -- end of round

-- Objective:
  -- Win 2 rounds
  -- To win a round, you need to have the most points @ eor

-- Pieces:
  -- Tokens => object?
    -- Goods (38)
      -- Banal
        -- 9 leather: [4, 3, 2, 1, 1, 1, 1, 1, 1]
        -- 7 spices: [5, 3, 3, 2, 2, 1, 1]
        -- 7 silks: [5, 3, 3, 2, 2, 1, 1]
      -- Precious
        -- 5 silver: [5, 5, 5, 5, 5]
        -- 5 gold: [6, 6, 5, 5, 5]
        -- 5 diamonds: [7, 7, 5, 5, 5]
    -- Others
      -- bonus tokens -- shuffled in their respective piles (randomization -- and then put into arrays?) -- m/b using fns to create these bonus token piles?
        -- 5 5-card bonus tokens (8-10 pts): {
              10: 2,
              9: 1,
              8: 2
            }
        -- 6 4-card bonus tokens (4-6 pts): {
              6: 2,
              5: 2,
              4: 2
            }
        -- 7 3-card bonus tokens (1-3 pts): {
              3: 2,
              2: 3,
              1: 2
            }
      -- 3 seals of excellence -- just markers for round-winners
      -- 1 camel token: 5 pts
  -- Cards (55)
    -- Goods (44)
      -- Banal
        -- 10 leather
        -- 8 spices
        -- 8 silks
      -- Precious
        -- 6 silver
        -- 6 gold
        -- 6 diamonds
    -- 11 Camels
-- Start:
  -- 3 camel cards in the market, rest in shuffled draw pile (deck) facedown
  -- after shuffling, put top 2 cards in market from deck
  -- deal out 5 cards to ea player from deck
    -- players put any camel cards in their hand in front of them (into your herd), out of their hand -- no refill of hand
-- Game Turn (buy or sell, but never both -- and only one 1 buy or 1 sell action ea turn):
  -- Buy:  Can take camels or goods but never both!
    -- Option A: Take SEVERAL GOODS via exchange
      -- Take multiple goods cards from the market, of any combo of type
      -- Must replace same number of cards from either your hand or your herd or some combo of both
          -- Limitations:
              -- Cannot exchange w/ the same type of good; MUST be a diff good
              -- Cannot exchange just 1 card from your hand against 1 card in the market; exchange must always involve at least 2 cards for 2 cards
    -- Option B: Take SINGLE GOOD for free
      -- Take a single good for free & add it to your hand, if by eot your hand does not exceed 7 cards
      -- Refill market from draw pile
    -- Option C
      -- Take ALL CAMELS (never some -- has to be all); camels never go into your hand
      -- Refill market from draw pile
  -- Sell (how you get pts)
    -- Place whatever goods you're going to sell into the discard pile
      -- Can sell only 1 of good ea turn
      -- If selling a precious good, must sell at least 2 at a time -- even if there's only 1 token of said precious good left
    -- Take the equivalent number of matching goods tokens from the bank -- FROM THE TOP (again, in desc order); if not enough to match what you've sold, tough cookies -- but you still get a bonus token if one applies and is available
    -- If sold 3+ cards, you can take 1 bonus token of equivalent type (3-card bonus for 3 cards, 4-card bonus for 4 cards, 5-card bonus for 5+ cards) -- from the top of the pile
-- Round Over:  Immediately if . . .
  -- 3 goods tokens piles are depleted (so when 3rd type is depleted) OR
  -- cannot refill market b/c draw pile has been depleted
  -- Logistics:
    -- Person w/ most camels in their herd gets camel token
    -- Player w/ most pts wins round and gets a seal token
    -- In the event of a tie, the player w/ the most number of bonus tokens wins.  If still a tie, the player w/ the most number of goods tokens wins.
    -- Loser starts next round, if no game winner yet
-- Game Over: Immediately . . .
  -- once player gets 2 seals


ASSUMPTIONS/ASSERTIONS
-- 2 players
-- Alternating turns
-- Hands are kept secret from other player
-- 7-card hand limit by eot (camels do not count twds 7-card hand limit -- b/c never in hand!)
-- Market always has to have 5 cards at eot
-- Camels always go into herds, never into hands

-- What is hidden and what is visible to evo?
  -- Hidden:
    -- Ea player's respective hands
    -- # of camels greater than 1 (in a stack faceup) -- players are not required to reveal how many camels they have
    -- Player's bonus tokens (only the heights of their stacks)
  -- Shown:
    -- Market
    -- All goods tokens & their values (they're spread out)
    -- Height of bonus token stacks (they're not spread out)


IDEAS:
-- container for ea player's hand
-- container for deck (poss for discard pile?)

-- WebSockets for making things appear on both clients?
-- Need a db (real or dummy) to hold info
