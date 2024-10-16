// let obj = new Object();

this.name = "Johnny";
const printName = () => {
  console.log(`${this.name}`);
};

// printName(); // undefined
printName.call({ name: "John" }); // undefined

const person = {
  name: "Alice",
  age: 25,
};

// Object.freeze(person); // This will prevent adding new properties, deleting existing properties and changing the value of existing properties
// Object.seal(person); // This will prevent adding new properties and deleting existing properties
// Object.preventExtensions(person); // This will prevent adding new properties
Object.defineProperty(person, "name", { writable: false }); // This will prevent changing the value of the name property

person.name = "Bob"; // This will not change the name property
person.gender = "female"; // This will not add a new property
delete person.age; // This will not delete the age property

console.log(person); // { name: "Alice", age: 25 }
