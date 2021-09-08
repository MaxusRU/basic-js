import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) // return false;
    throw new Error("'arr' parameter must be an instance of the Array!");
  let a = [];
  let flag = false;
  for (let i in arr){
    if (!flag){
      if (a[i] === '--discard-next') flag = true; //i++;
      else if (a[i] === '--discard-prev') a.pop();
      else if (a[i] === '--double-next') a.push(arr[i+1]);
      else if (a[i] === '--double-prev') {
       /* if (i>0)*/ a.push(arr[i-1]);
      } 
      else /*if (typeof(arr[i]) === 'number')*/ a.push(arr[i]);
    }
    else
      flag = false;
  }
  if (a[0] === '--discard-next') a.shift();
  if (a[0] === '--discard-prev') a.shift();
  if (a[0] === '--double-prev') a.shift();
  if (a[0] === '--double-next') a.shift();
  if (a[a.length-1] === '--discard-next') a.pop();
  if (a[a.length-1] === '--discard-prev') a.pop();
  if (a[a.length-1] === '--double-next') a.pop();
  if (a[a.length-1] === '--discard-prev') a.pop();

  return a;
  // return arr;

  //Пробежать весь новый массив и швейцарским ножом вырезать/скопировать нужное
}
