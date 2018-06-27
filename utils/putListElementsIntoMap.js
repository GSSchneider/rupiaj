'use strict';

const assert = require('assert').strict;
const { List, Map } = require('immutable');
const chalk = require('chalk');

const logError = chalk.bold.red;

module.exports = function putListElementsIntoMap(list, toPop, numToPop) {
  /** Given an immutable list, returns an immutable map with the elements of said list as its keys and the frequency of their occurrences as their respective values -- with an option to pop off the list as you go.
   *
   * @param {list} immutable list
   * @param {boolean} toPop - A designation as to whether to pop off the array as the list elements are put into the map
   * @param {boolean} numToPop - Number of items to pop -- and put into the map -- if toPop is true; if not provided, the default is to pop off the entire list.
   * @returns {map} immutable map - The elements in passed-in list, the number of which can be designated by numToPop, as a frequency object in the form of an immutable map.
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

  // CONSIDER:  Should this `validateParams` function be placed outside of this `putListElementsIntoMap` function?
  const validateParams = (toPop, numToPop) => {
    if (typeof numToPop === 'number' && numToPop < 0) {
      throw new Error(
        logError('numToPop has to be greater than or equal to 0')
      );
    }

    if (toPop && (numToPop < 0 || numToPop === null)) {
      throw new Error(
        logError('toPop and numToPop need to be both truthy or both falsy')
      ); // so you don't try to do silly things like say you're not going to pop off anything, but then specify a number (other than 0) to pop off
    }
  };

  // // POSSIBLE DELETE:
  // // Is this even necessary, if I just set do `times = numToPop || list.size`?
  // const setNumToPopDefault = (toPop, numToPop) => {
  //   // set default of numToPop only if toPop is true
  //   if (toPop && numToPop === undefined) {
  //     numToPop = list.size;
  //   }
  // };

  validateParams(toPop, numToPop);
  // setNumToPopDefault(toPop, numToPop);

  let tracker = Map();
  let times = numToPop || list.size;

  for (let i = 0; i < times; i++) {
    let currentElement = list.get(i);

    // if popping off the list:
    if (toPop) currentElement = list.pop();

    if (!tracker[currentElement]) tracker.set(tracker[currentElement], 1);
    // equivalent to `tracker[currentElement] + 1`
    else tracker.set(tracker[currentElement], tracker[currentElement] + 1); // equivalent to `tracker[currentElement]++`
  }

  // console.log('final list:', list);
  // console.log('final tracker:', tracker.entries);

  return tracker;
};

// TESTING -- TO BE DELETED:
// const testArray = [ 'C', 'B', 'A', 'B', 'A', 'B', 'C' ];
// trackFrequency(testArray);
