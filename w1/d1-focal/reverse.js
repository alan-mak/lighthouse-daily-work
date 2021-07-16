const reverse = function(string) {
  let final = "";
  let count = 0;
  for (let word of string) {
    for (let i = word.length - 1; i >= 0; i--) {
      final += word[i];
    }
    if ((string.length - 1) === count) {
      break;
    } else {
      final += "\n";
      count++;
    }
  }
  return final;
};

console.log(reverse(process.argv.slice(2)));