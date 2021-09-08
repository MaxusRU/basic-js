import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let digits = n.toString().split('');
  let arr = digits;
  let max = 0;
  // return digits; ['1', '5', '2']
  return arr; //+digits.splice(i, 1);
  for (let i of digits){
    let arrR = digits;
    return digits.splice(0, 1);
    // return arrR;

    // let digits = 
    // arr.push(digits.splice(i, 1));
    // return arr; //+digits.splice(i, 1);

  }
  return Math.max(arr);
}
