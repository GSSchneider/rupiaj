module.exports = function createShuffledArrayFromFrequencyObject(freqObj, areKeysNums) {
  /**
   * In this context, "frequency object" means an object whose values reflect the frequency of occurrences of their respective keys.
   *
   * EXAMPLE:
   *
   *  Given a collection -- 1 foo, 2 bar, 1 qux -- as an object:
   *    {
   *      foo: 1,
   *      bar: 2,
   *      qux: 1
   *    }
   *
   *  Returns, for example:
   *    [bar, foo, qux, bar]
   *
   */

  let array;

  function createArray(freqObj, areKeysNums) {
    let generatedArray = [];

    for (let key in freqObj) {
      for(let times = 1; times <= freqObj[key]; times++) {
        if (areKeysNums) generatedArray.push(Number(key));
        else generatedArray.push(key);
      }
    }

    // console.log('generated array:', generatedArray);
    return generatedArray;
  }

  if (areKeysNums) array = createArray(freqObj, true);
  else array = createArray(freqObj, false);

  /** FISHER-YATES SHUFFLE
   * https://bost.ocks.org/mike/shuffle/
   * Store shuffled elements in the back of the array; store the remaining elments to be shuffled in the front.
   */

  function shuffleArray(array) {
    var back = array.length,
        front;

    // While there remain elements to shuffle . . .
    while (back) {

      // pick an element to shuffle from the front,
      front = Math.floor(Math.random() * back--);

      // and swap it with the current element.
      [array[back], array[front]] = [array[front], array[back]];
    }

    // console.log('shuffled array:', array);
    return array;
  }

  return shuffleArray(array);
};
