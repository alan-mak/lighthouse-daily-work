const sum = function(args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += parseInt(args[i]);
  }
  return total;
};

console.log(sum(process.argv.slice(2, 4)));