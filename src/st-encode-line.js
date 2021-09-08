import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return str;
  // let str = 'aabbbc';
  let num = 1;
  let result = []; // [str+' '];//[];
  for (let i=0; i<str.length; i++){
    if (str[i+1] == str[i]) num++;
    else{
      if (num != 1) result.push(num+str[i]);
      else result.push(str[i]);
      num = 1;
    }
  }
  
  return result.join('');  
}

// -3a6t
// +4a4t
