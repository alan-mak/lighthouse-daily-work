const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

let biggestFollower = (data) => {
  let largest = 0;
  let biggestFollow = null;
  for (let id in data) {
    if(largest < data[id].follows.length) {
      largest = data[id].follows.length;
      biggestFollow = data[id].name;
    }
  }
  return biggestFollow;
};

let mostPopular = (data) => {
  let followers = {};
  for (let id in data) {
    for (let following of data[id].follows) {
      if (followers.hasOwnProperty(following)) {
        followers[following] += 1
      } else {
        followers[following] = 1
      }
    }
  }
  let largest = Math.max.apply(null, Object.values(followers));
  let mostPop = [];
  for (let id in followers) {
    if (followers[id] === largest) {
      mostPop.push(data[id].name)
    }
  }
  return mostPop;
};

let printAll = (data) => {
  for (let id in data) {
    console.log("Person: ", data[id].name);
    let followers = [];
    for (let id2 of data[id].follows) {
      followers.push(data[id2].name);
    }
    console.log("Followers: ", followers);
  }
};

let unrequitedFollowers = (data) => {
  let unrequited = [];
  for (let id in data) {
    for (let id2 of data[id].follows) {
      if (data[id2].follows.includes(id)) {
      } else {
        if(unrequited.includes(data[id].name)) {
        } else {
          unrequited.push(data[id].name);
        }
      }
    }
  }
  return(unrequited)
};

let mostFollowersOver = (data) => {
  let over30 = {};
  for (let id in data) {
    for (let id2 of data[id].follows) {
      if (data[id2].age > 30) {
        if (over30.hasOwnProperty(data[id].name)) {
          over30[data[id].name] += 1;
        } else {
          over30[data[id].name] = 1;
        }
      }
    }
  }
  let largest = Math.max.apply(null, Object.values(over30));
  let mostPop = [];
  for (let id in over30) {
    if (over30[id] === largest) {
      mostPop.push(id)
    }
  }
  return mostPop;
};

console.log("Follows the Most", biggestFollower(data));
console.log("Most Popular", mostPopular(data))
printAll(data)
console.log("Unrequited Followers", unrequitedFollowers(data))
console.log("Most followers over 30", mostFollowersOver(data))