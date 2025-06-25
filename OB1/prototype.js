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

function Person1(name) {
  this.name = name;
}

Person1.prototype.getName = () => {
  return this.name;
};

const surya = new Person1("surya");
console.log(surya.getName());

//It takes the value of the property name on the global object because they take the context of where they are defined

//Output 3:

function parseData(data) {
  return data;
}

class User {
  constructor(name, data) {
    const parsedData = parseData(data);

    this.name = name;
    this.data = parsedData;

    // return parsedData;
  }

  getData() {
    return this.data;
  }
}

const suryaa = new User("surya", {
  work: "Software Engineer",
  shouldConnect: true,
});

console.log(suryaa.getData());

//TypeError: suryaa.getData is not a function with return statement

//OUTPUT 4:

function People(name) {
  this.name = name;
}

People.prototype.sayName = function () {
  console.log(this.name);
};

var suryaaaa = new People("surya");

suryaaaa.sayName();
People.prototype.sayName();
Object.getPrototypeOf(suryaaaa).sayName();
suryaaaa.__proto__.sayName();

/**
 * 🔹 Calling a method from the prototype object directly (People.prototype.sayName()) means this refers to the prototype itself, which doesn’t have name → so undefined.
   🔹 Calling the method on the instance (instance.sayName()) sets this to the instance → works as expected.
 *  */
