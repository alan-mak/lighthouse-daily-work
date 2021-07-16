const shouldBuyCar = function(car, age) {
  if (car === undefined) {
    return undefined;
  }

  if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  }

  if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  }

  const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }

  if (user.age >= 18) {
    return true;
  }

  return false;
}

module.exports = shouldBuyCar;