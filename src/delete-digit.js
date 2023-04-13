const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let nString = n.toString();
  let maxN = 0;
  for (let i = 0; i < nString.length; i++) {
    let num = parseInt(nString.slice(0, i) + nString.slice(i+1));
    if (num > maxN) {
      maxN = num;
    }
  }
  return maxN;
}

module.exports = {
  deleteDigit
};
