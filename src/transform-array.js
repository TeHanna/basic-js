const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr))
  throw new Error("'arr' parameter must be an instance of the Array!");

  let array = arr.map((item) => item);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "--discard-next") {
      array[i] = '';
      array[i + 1] = '';
    }
    if (array[i] === "--double-next") {
      array[i] = array[i + 1];
    }
    if (array[i] === "--double-prev") {
      array[i] = array[i - 1];
    }
    if (array[i] === "--discard-prev") {
      array[i] = '';
      array[i - 1] = '';
    }
  }

  return array.filter((item) => item != '' && item != undefined)
}

module.exports = {
  transform
};
