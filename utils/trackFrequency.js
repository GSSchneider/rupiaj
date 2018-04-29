module.exports = function trackFrequency(array) {
  /** Given an array, returns an object with the elements of said array as its keys and the frequency of their occurrences as their respective values.
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
  let tracker = {};

  for (let i = 0; i < array.length; i++) {
    if (!tracker[array[i]]) {
      tracker[array[i]] = 1;
    }
    else {
      tracker[array[i]]++;
    }
  }
  return tracker;
};
