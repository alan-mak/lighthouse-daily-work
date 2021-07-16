const titleCase  = function(text) {
  // Your code in here ...
  text = text.toLowerCase().split(" ");
  let title = [];
  for (let index in text) { 
    let word = "";
    for (let i in text[index]) {
      if (i == 0) {
        word += text[index][0].toUpperCase();
      } else {
        word += text[index][i];
      }
    }
    title.push(word);
  }
  return title.join(" ");
};

console.log(titleCase('This is an example'))