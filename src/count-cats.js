const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */inputMatrix) {
  // newArray = [...inputMatrix].filter(el => el === '^^');
  if (!inputMatrix) return 0;

  const numberOfEl = inputMatrix.reduce((sum, subArr) => {
    const subSum = subArr.filter(el => el === '^^').length;
    sum += subSum;
    return sum;
  }, 0);

  return numberOfEl;
}

countCats()

module.exports = {
  countCats
};
