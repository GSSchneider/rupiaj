module.exports = {
  interleaveKeysAndValues(keys, values) {
    return keys.reduce( (accumulator, currentValue, currentIndex) => {
      return accumulator.concat(currentValue, values[currentIndex]);
    }, [] );
  }
};
