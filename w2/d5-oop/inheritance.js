// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact} and my email is ${this.email}`;
  }
};

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

let alan = new Student("Alan", "I have none", 'alanmak@mail.com')
alan.enroll('Nov')
console.log(alan.bio())
let vasily = new Mentor('Vasily', 'He has one')
vasily.goOnShift()
console.log(vasily)