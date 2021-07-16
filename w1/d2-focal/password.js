let obfuscate = function(password) {
  let encoded = "";
  for (let word of password) {
    for (let letter of word) {
      switch (letter) {
      case "a":
        encoded += 4;
        break;
      case "e":
        encoded += 3;
        break;
      case "o":
        encoded += 0;
        break;
      case "l":
        encoded += 1;
        break;
      default:
        encoded += letter;
        break;
      }
    }
  }
  return encoded;
};

let password = process.argv.slice(2);
console.log(obfuscate(password));