const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  const copyArray = [...arr];
  const sortedArray = copyArray.filter((item) => item !== -1)
      .sort((a, b) => a - b);

  let n = 0;
  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] !== -1) {
      copyArray[i] = sortedArray[n];
      n++;
    }
  }
  return copyArray;
}

module.exports = {
  sortByHeight
};
