const raisinAlarm = function(cookie) {
  for (let value of cookie) {
    if (value === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

// TEST CASES
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let results = [];
  for (let value of cookies) {
    let logic = true;
    for (let value2 of value) {
      if (value2 === "🍇") {
        logic = false;
        results.push("Raisin alert!");
        break;
      }
    }
    if (logic) {
      results.push("All good!");
    }
    
  }
  return results;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));