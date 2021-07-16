// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  }
  );
};

const actionWhenFound = function(index) {
  console.log("Found him at index", index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);