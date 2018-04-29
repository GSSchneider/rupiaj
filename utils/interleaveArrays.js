module.exports = function interleaveArrays(array1, array2) {
  /**
   * EXAMPLE:
   *
   * Given `[a, b, c]` and `[x, y, z]`,
   * this function returns `[a, x, b, y, c, z]`.
   */
  return array1.reduce( (previousValue, currentValue, currentIndex) => {
    return previousValue.concat(currentValue, array2[currentIndex]);
  }, [] );
};
