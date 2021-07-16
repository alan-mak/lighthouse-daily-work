/* Recycling Program of Empty Bottles
* For every two empty bottles, you can get one free (full) bottle of pop
* For every four bottle caps, you can get one free (full) bottle of pop
* Each bottle of pop costs $2 to purchase

Example:
---------------------------
|Investment	|Total Bottles|
|   10      |   15        |
|   20      |   35        |
|   30      |   55        |
|   40      |   75        |
---------------------------
*/

const bottlesBought = (investment) => {
  let totalBottles = Math.floor(investment / 2);
  let totalCaps = Math.floor(investment / 2);
  let sum = totalBottles;
  let bottlesEarned = 0;
  let capsEarned = 0;

  while ((Math.floor(totalBottles / 2) !== 0) || (Math.floor(totalCaps / 4) !== 0)) {
    let newBottles = bottleExchange(totalBottles) + capExchange(totalCaps);
    bottlesEarned += bottleExchange(totalBottles);
    capsEarned += capExchange(totalCaps);
    totalBottles = totalBottles - (bottleExchange(totalBottles) * 2) + newBottles;
    totalCaps = totalCaps - (capExchange(totalCaps) * 4) + newBottles;
    sum += newBottles;
  }
  console.log(`TOTAL SUM: ${sum}`);
  console.log(`REMAINING BOTTLES: ${totalBottles}`);
  console.log(`REMAINING CAPS: ${totalCaps}`);
  console.log(`BOTTLES EARNED BY RECYCLING:`);
  console.log(`\tBOTTLES: ${bottlesEarned}`);
  console.log(`\tCAPS: ${capsEarned}`);

};

const bottleExchange = (bottles) => {
  return Math.floor(bottles / 2);
};

const capExchange = (caps) => {
  return Math.floor(caps / 4);
};

const args = process.argv.slice(2);
bottlesBought(args);