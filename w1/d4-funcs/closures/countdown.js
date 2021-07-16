const countdownGenerator = function (x) {
  /* your code here */
  x += 1;
  return function () {
    x--;
    if (x > 0) {
      return `T-minus ${x}...`;
    } else if (x === 0) {
      return "Blast Off!"
    } else {
      return "Rockets already gone, bub!"
    }
  }
};

const countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!