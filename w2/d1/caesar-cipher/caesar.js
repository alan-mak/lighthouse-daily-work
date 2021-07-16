let encrypt = function (plaintext, key) {
  let letterNum = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
    l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  let numLetter = {};
  Object.entries(letterNum).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    numLetter[value] = key;
  })
  let encrypted = "";
  for (let letter of plaintext) {
    let currentNum = letterNum[letter];
    if (isNaN(currentNum)) {
      encrypted += " ";
    } else {
      let newNum = currentNum + key;
      // console.log(newNum)
      if (newNum <= 0) {
        newNum = 26 + newNum;
      } else if (newNum >= 26) {
        newNum = newNum - 26;
      }
      // console.log(newNum)
      encrypted += numLetter[newNum]
    }
  }
  return encrypted;
}
// console.log(encrypt("hello world", 5))
module.exports = { encrypt };