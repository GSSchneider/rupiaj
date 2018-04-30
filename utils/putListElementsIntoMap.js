const assert = require('assert').strict;
const { List, Map } = require('immutable');
const chalk = require('chalk');

const logError = chalk.bold.red;

// TODO:  SIMPLIFY this fn!  Maybe create a `validateParameters` fn?

module.exports = function putListElementsIntoMap(list, toPop, numToPop) {
  /** Given an immutable list, returns an immutable map with the elements of said list as its keys and the frequency of their occurrences as their respective values -- with an option to pop off the list as you go.
   *
   * @param {list} immutable list
   * @param {boolean} toPop - A designation as to whether to pop off the array as the list elements are are put into the map
   * @param {boolean} numToPop - Number of items to pop -- and put into the map -- if toPop is true; if not provided, the default is to pop off the entire list.
   * @returns {map} immutable map - the elements in passed-in list
   * @example
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

  // set default of numToPop only if toPop is true
  if (toPop && (numToPop === undefined)) numToPop = list.size;

  if (typeof numToPop === 'number' && numToPop < 0) throw new Error(logError('numToPop has to be greater than or equal to 0'));

  if (!!toPop !== !!numToPop) throw new Error(logError('toPop and numToPop need to be either both truthy or both falsy')); // so don't try to do silly things like say you're not going to pop off anything, but then specify a number (other than 0) to pop off

  let tracker = Map();
  let times = numToPop || list.size;

  for (let i = 0; i < times; i++) {
    let currentElement = list.get(i);

    // if popping off the list:
    if (toPop) currentElement = list.pop();

    if (!tracker[currentElement]) tracker.set(tracker[currentElement], 1); // equivalent to `tracker[currentElement] + 1`
    else tracker.set(tracker[currentElement], tracker[currentElement] + 1); // equivalent to `tracker[currentElement]++`
  }

  console.log('final list:', list);
  console.log('final tracker:', tracker.entries);

  return tracker;

};

// TESTING -- TO BE DELETED:
// const testArray = [ 'C', 'B', 'A', 'B', 'A', 'B', 'C' ];
// trackFrequency(testArray);
