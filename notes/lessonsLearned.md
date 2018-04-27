*** LESSONS LEARNT ***

-- Code in SMALL increments!  Then test that one tiny little chunk.  Then commit.  Rinse & repeat.
-- Don't use arrow functions in mocha/chai `describe` and `it` blocks (not recommended b/c of the lexically bound `this` in arrow fns).
-- In TDD, write your tests so that they fail first b/c that shows that they're _working_.
