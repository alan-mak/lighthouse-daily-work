class Pizza {
  
  constructor(size, crust) {
    this.size = size,
    this.crust = crust,
    this.toppings = ["cheese"];
  }
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    } else {
      return false;
    }
  }
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  // getSize() {
  //   return this.size;
  // }
  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizza1 = new Pizza('l', 'thin');
console.log(pizza1.toppings)
console.log(pizza1.price)
pizza1.addTopping("mushrooms");
console.log(pizza1.toppings)
console.log(pizza1.price)
pizza1.addTopping("peppers");
console.log(pizza1);
pizza1.setSize('m');
console.log(pizza1);
console.log(pizza1.price)