import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // if (!date) {
  //   throw new PropertyRequiredError("Invalid date!");
  // console.log(date.getMonth());
  // try{
  //   var d = new Date(date);
  // }catch(err){
  //   throw new NotImplementedError('Invalid date!'); //return false;
  // }
  if (!date || date === undefined || isNaN(date))// || typeof(data) != "string") // return false;
    throw new NotImplementedError('Invalid date!');
  const month = date.getMonth();
  // if (!month)
  //   return false;
  // return false;
  if (month >=2 && month <= 4)
    return 'spring';
  if (month >=5 && month <= 7)
    return 'summer';
  if (month >=8 && month <= 10)
    return 'autumn';
  if (month >=11 || month <= 1)
    return 'winter';
  else
    return false;
  // return date.getMonth();
}
