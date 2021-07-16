const pigLatin = function(string) {
  let final = "";
  for (let x = 2; x < string.length; x++) {
    let first = "";
    for (let i = 0; i < string[x].length; i++) {
      if (i === 0) {
        first = string[x][i];
      } else {
        final += string[x][i];
      }
    }
    final += first + "ay";
    if (x === string.length - 1) {
      break;
    } else {
      final += " ";
    }
  }
  return final;
};

console.log(pigLatin(process.argv));