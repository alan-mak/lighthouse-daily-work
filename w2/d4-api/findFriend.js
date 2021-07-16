// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

let findFriend = function (data, name, property) {
  for (let contact of data) {
    if (contact.name === name) {
      let friend = contact.friends[0];
      for (let friendContact of data) {
        if (friendContact.name === friend) {
          const final = {
            name: friendContact.name
          }
          if (friendContact[property] === undefined) {
            return "Not found"
          }
          final[property] = friendContact[property];
          return final;
        }
      }
    }
  }
  return "Not found";
}

console.log(findFriend(contacts, "Abbott", "birthday"))