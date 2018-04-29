const assert = require('assert').strict;

module.exports = function trackFrequency(array, toPop, numToPop) {
  /** Given an array, returns an object with the elements of said array as its keys and the frequency of their occurrences as their respective values -- with an option to pop off the array as you go.
   *
   * EXAMPLE:
   * Given:
   *  [ 'C', 'B', 'A', 'B', 'A', 'B', 'C' ]
   *
   * Returns:
   *  {
   *   'A': 2,
   *   'B': 3,
   *   'C': 2
   *  }
   */

  if (toPop && (numToPop === undefined)) numToPop = array.length;

  assert.ok((!!toPop == !!numToPop), 'toPop and numToPop need to be either both truthy or both falsy');

  let tracker = {};
  let times = numToPop || array.length;

  for (let i = 0; i < times; i++) {
    let currentElement = array[i];

    // if popping off the array:
    if (toPop) {
      currentElement = array.pop();
    }

    if (!tracker[currentElement]) tracker[currentElement] = 1;
    else tracker[currentElement]++;
  }

  console.log('final array:', array);
  console.log('final tracker:', tracker);

  return tracker;

};

// const testArray = [ 'C', 'B', 'A', 'B', 'A', 'B', 'C' ];

// TEST CALL
// trackFrequency(testArray);
