class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  // Feature 2
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  // Feature 3
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  // Feature 4
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let employeesUnder = 0; // 1
    let subordinate = this.subordinates;

    // This approach uses recursion
    for(let childNode of subordinate) {
      employeesUnder += childNode.totalEmployees + 1;
    }
    return employeesUnder;

    // // This approach make a loop per level
    // // Use depth first traversal to calculate the total employees
    // for (let sub in subordinate) { // Loops through all the subordinates of boss
    //   console.log(subordinate[sub].name);
    //   let subordinate2 = subordinate[sub].subordinates;
    //   for (let sub2 in subordinate2) { // Loops through all the subordinates of manager
    //     totalEmployees ++;
    //     console.log(subordinate2[sub2].name)
    //   }
    //   totalEmployees ++;
    // }
    // return totalEmployees;

  }
}

const ada = new Employee("Ada", "CEO", 3000000);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
const simone = new Employee("Simone", "Worker", 65000);
const ali = new Employee("Ali", "Worker", 65000);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
const florida = new Employee("Florida", "Worker", 65000);
const david = new Employee("David", "Worker", 65000);
const brian = new Employee("Brian", "Worker", 65000);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);
const karla = new Employee("Karla", "Worker", 65000);
angela.addSubordinate(karla);
const sarah = new Employee("Sarah", "Slave", 95000);
const andrew = new Employee("Andrew", "Slave", 90000);
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);
const ace = new Employee("Ace", "Slave", 60000);
simone.addSubordinate(ace);

console.log(craig.boss.name);
console.log(craig.numberOfSubordinates)
console.log(craig.numberOfPeopleToCEO);
console.log(craig.totalEmployees)
console.log(ada.totalEmployees)