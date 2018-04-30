*** LESSONS LEARNT ***

-- Code in SUPER SMALL increments!  Then test that one tiny little chunk.  Then commit (and push).  Rinse & repeat.
-- Don't use arrow functions in mocha/chai `describe` and `it` blocks (not recommended b/c of the lexically bound `this` in arrow fns).
-- In TDD, write your tests so that they fail first b/c that shows that they're _working_.
-- Export your exports not as objects but as functions (i.e., wrap your objects in functions) so that they're way easier to test.
-- Abstract your functions as much as poss from the business logic, so that they're reusable.
-- Make each fn do only ONE thing -- makes things SO much easier to test and debug!  If your fn is doing more than one thing, break it up!
-- Try, as much as possible, to make your functions pure.
