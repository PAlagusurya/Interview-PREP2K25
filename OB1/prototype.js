// Output 1:

class Person {
  constructor(name) {
    this.name = name;
  }

  print = () => {
    console.log(this.name);
  };
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  print() {
    console.log(this.name, this.id);
  }
}

const one = new Person("one");
one.print();

const two = new Employee("two", 2);
two.print();

/**
 * OUTPUT : one,two
 * NOTE:
 * 🔹 Arrow functions = instance level
   🔹 Class methods = prototype level
 */

// Output 2:

function Person(name) {
  this.name = name;
}

Person.prototype.getName = () => {
  return this.name;
};

const surya = new Person("surya");
console.log(surya.getName());

//It takes the value of the property name on the global object because they take the context of where they are defined
