module.exports = function interleaveArrays(array1, array2) {
  /**
   * @param {array} One array.
   * @param {array} Another array.
   * @returns {array} A new array with the passed in arrays interleaved.
   * @example
   * Given: [a, b, c] and [x, y, z]
   * Returns: [a, x, b, y, c, z]
   */
  return array1.reduce( (previousValue, currentValue, currentIndex) => {
    return previousValue.concat(currentValue, array2[currentIndex]);
  }, [] );
};
