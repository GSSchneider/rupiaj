**_ RUPIAJ _**

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
-- Buy: Can take camels or goods but never both!
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
-- Round Over: Immediately if . . .
-- 3 goods tokens piles are depleted (so when 3rd type is depleted) OR
-- cannot refill market b/c draw pile has been depleted
-- Logistics:
-- Person w/ most camels in their herd gets camel token
-- Player w/ most pts wins round and gets a seal token
-- In the event of a tie, the player w/ the most number of bonus tokens wins. If still a tie, the player w/ the most number of goods tokens wins.
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

/_ CASEY'S NOTES _/
Game objects:

- 55 Cards
  - 11 Camels
  - 44 Goods
    - 6 Diamonds
    - 6 Gold
    - 6 Silver
    - 8 Cloth
    - 8 Spice
    - 10 Leather
- Tokens
  - Goods
  - Bonus (awarded for good sales)
  - Camel (awarded for having most camels in herd)
  - Seals of Excellence (awarded for winning a round)

Game zones:

- Shared by both players
  - Market ("between the players")
  - Draw pile (deck)
  - Discard pile
  - Tokens
    - Distributions?
- For each of two players
  - Hand of cards
  - "Herd"

Setup

- Move three camel cards from deck to market
  - Confirm that there are 52 cards in the deck
- Shuffle deck
- Deal 5 cards to each player
  - Confirm that there are 42 cards in the deck
- Move two cards from deck to the market
  - Confirm that there are 40 cards in the deck
  - Confirm that the market has five cards
- Move all camels from player hands to their herds
- Create token piles for goods
  - Highest values are at the top of the pile (descending order)
- Create token piles for bonus tokens
  - Random order, grouped by type

Rule:

- You can never make your hand size so big that you would voluntarily discard down to 7. The hand limit is strictly enforced–do not allow any action that would leave a player with more than 7 cards.

On each player turn, choose one:

- Take cards (choose one):
  - Take several goods (exchange)
    - Move n goods from the market into your hand. Valid if:
      - n >= 2 (you can never exchange just one card)
      - none of the cards are camels
    - Put n cards into the market, from your hand (goods) or from your herd (camels). Valid if:
      - none of the cards put into the market have the same goods type as any card taken from the market
      - player hand size <= 7
  - Take one good (available if player hand size <= 6)
    - Move one good from the market into your hand. Valid if:
      - Player hand size <= 7 after taking the card.
    - Fill empty spaces with cards from the deck
      - If you go to draw a card from the deck and cannot, the round ends immediately
  - Take all camels (does not affect hand size)
    - Move all camels from the market into your herd
      - Confirm that there are no camels left in the market
    - Fill empty spaces with cards from the deck
      - If you go to draw a card from the deck and cannot, the round ends immediately
- Sell cards
  - Select one type of good
  - Move n cards of that type from your hand to the discard pile. Valid if:
    - All cards have the same type
    - Type is diamonds, gold, or silver and n >= 2
  - Take n tokens from the token pile that matches the type of good discarded
    - If 3 piles are depleted, the round ends immediately
  - If you moved 3+ cards (n >= 3), take a bonus token of the corresponding type

At the end of the round:

- Give the camel token (5 pts) to the player with the most camels in his herd
  - If there is a tie, neither player gets the token
- Sum the values of the tokens
- Give a Seal of Excellence to the player with the greater sum
  - If there is a tie, the player with the most bonus tokens wins
  - If there is still a tie, the player with the most goods tokens wins
- If any player has 2+ Seals of Excellence, that player wins
- Otherwise, go to setup and begin a new round

My observations are basically like this:

- There are only two kinds of game objects: cards, and tokens.
- Jaipur is zero sum: all the game objects exist in the game at once, and only those objects are ever in the game
- Cards and tokens have exclusive zones.
  - Cards only live in card zones (like the player's hand), and tokens only live in token zones (like the token supply).
- The fundamental action in Jaipur (like most board games) is moving objects between zones.
- Possible movements:
  - Tokens
    - Token supply -> player collection (when scoring)
  - Cards
    - Deck -> market (when refilling empty spaces)
    - Market -> hand (during exchange, or when taking 1 good from the market)
    - Market -> herd (during "take all camels" action)
    - Hand -> market (during exchange)
    - Hand -> herd (beginning of the game)
    - Hand -> discard (during sale of goods)
- These movements are covered by "remove a set of objects from one collection, and add them to another collection"
  - As you've observed and added to your code, these collections can be represented with arrays in all cases
- All actions in Jaipur are:
  - Selecting a subset of objects in a zone (ex.: "which cards in the market do you want to take for exchange?")
  - Moving those objects from one zone to another of the same type (the selected cards move to your hand)
  - Checking that the game state is valid (the game is not in a valid state until the player puts cards back into the market to meet the game rules)
- Checking that the game state is valid–this is the challenging part
  - This is something you can write automated tests for, provided you can set up the initial game state correctly
  - Build it as a composition of many small functions that you can test
  - Write code that allows you to quickly populate zones (cards in hand, deck, etc.) with objects in the order you want (for instance, by setting the contents of an array)
  - Write validator functions for your zones; some examples:
    - The herd zone only has camels in it, or is empty
    - The player hand does not have more than seven cards in it
    - The deck does not have more than eight camels in it (11 minus the 3 put into the market)
    - The stack of gold tokens has one of the valid configurations
      - If there are six tokens, and they're always in descending order by value, then there are only seven possible states the stack can be in: [A, B, C, D, E, F], [B, C, D, E, F], [C, D, E, F], [D, E, F], [E, F], [F], [](empty)
    - (look in the list of rules I made above for phrases like "confirm" and "valid if")
    - The key is to make small functions that check one thing that should always be true
  - Write a "game state is valid" function that returns true if and only if every one of these validator functions returns true
  - Create some tests to prove that the rules are enforced by your validator functions:
    - Call game setup function
    - Assert that "game state is valid" is true
    - Do something illegal, like moving camels from the herd to your hand
    - Assert that "game state is valid" is false, proving that the move you made invalidated the game state
