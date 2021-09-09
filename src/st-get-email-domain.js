import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {emailing} email
 * @return {emailing}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // for (let i in email){
  //   // console.log(email[i]);
  //   if (email[i] == '@'){ // /*return*/ console.log(email.slice(i,3));
  //     email = email.split('');
  //     email.splice(0, i);
  //   }
  // }
  // email.shift();
  // return email.join('');
  // return email;//.join('');
  // return email; //tst
  // return email; //
  email = email.split('');
  let ind = email.findIndex(i => i == '@');
  console.log(ind);
  email.splice(0, ind+1);
  // email = email.join('');
  ind = email.findIndex(i => i == '@');
  console.log(ind);
  email.splice(0, ind+1);
  email = email.join('');
  
  // email = email.split(' ').join('');
  return email;

  // email = email.split('');
  // let output = [];
  // for (let i=email.length; i>0; i--){
  //   output.unshift(email[i]);
  //   if (email == '@') return (i + email);

  // }


  // email = email.split('');
  // let ind = email.findIndex(i => i == '@');
  // ind = ind + 1;
  // let deleItems = email.slice(ind, email.length).join('');
  // console.log(ind);
  return deleItems;
  // return ind+1;
  // return email;
  return ind + email + email.join('');
  return email;//.join('');
}

//prettyandsimple@example.com
