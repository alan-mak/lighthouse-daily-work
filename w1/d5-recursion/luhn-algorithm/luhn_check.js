"use strict"

let check = (number) => {
  let numberLength = number.length - 1;
  let sum = 0;
  for (let i = numberLength; i >= 0; i--) {
    if(i % 2 === 1) {
      sum += parseInt(number[i]);
    } else {
      let digit = number[i] * 2;
      if (digit > 9) {
        sum += parseInt(digit - 9);
      } else {
        sum += parseInt(digit);
      }
    }
  }
  if (sum % 10 === 0) {
    return "Valid Credit Card"
  }
  return "Invalid Credit Card"
};

console.log(check("5191230197681100"))