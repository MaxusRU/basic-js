import { NotImplementedError } from '../extensions/index.js';

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
export default function countCats(backyard/* matrix */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // var newArr = [];
  let count = 0;
  let newArr = [].concat(...backyard);
  // for (let i = 0; i < newArr.length; i++)
  for (let i in newArr) if (newArr[i] === "^^") count++;
  return count;
}
