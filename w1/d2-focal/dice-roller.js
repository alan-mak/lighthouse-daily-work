let rollDie = function(roll) {
  let number = [];
  for (let i = 0; i < roll; i++) {
    let rolled = Math.ceil(Math.random() * 6);
    number.push(rolled);
  }

  return number.join(', ');
};

let die = process.argv.slice(2);
let numbers = rollDie(die);
console.log(`Rolled ${die} dice: ${numbers}.`);