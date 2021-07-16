const nameInverter = function(name) {
  let honorific = ['Mr.', 'Mrs.', 'Dr.'];
  if (name === "") {
    return "";
  }
  if (name === undefined) {
    return "throw 'Error'"
  }
  name = name.trim().split(" ");

  for (let title of honorific) {
    if (title == name) {
      return "";
    }
    for (let pieceOfName of name) {
      if (pieceOfName === title) {
        if (name.length >= 3) {
          name = [name[1], name[2]];
          name = name.reverse().join(", ");
          return pieceOfName + " " +  name;
        } else {
          return name.join(" ");
        }
      }
    }
  }


  name = name.reverse().join(", ");
  return name;
}

module.exports = nameInverter;