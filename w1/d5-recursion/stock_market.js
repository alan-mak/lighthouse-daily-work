/* Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. */

const maxProfit = (arr, boughtPrice) => {
  for (let [index, price] of arr.entries()) {
    if (price === boughtPrice) {
      arr = arr.slice(index);
      break;
    }
  }
  max = arr.length - 1;
  sortedArr = arr.sort((a, b) => (a - b));
  let profit = sortedArr[max] - boughtPrice;
  if (profit <= 0) {
    return -1;
  }
  return profit
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11], 35));