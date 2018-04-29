module.exports = function interleaveArrays(array1, array2) {
  return array1.reduce( (previousValue, currentValue, currentIndex) => {
    return previousValue.concat(currentValue, array2[currentIndex]);
  }, [] );
};
