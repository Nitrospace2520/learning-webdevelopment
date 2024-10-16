/* // ! Functions:-
/// ? Anonymous Function:-
((name) => console.log(`${name}`))("Bubu");

/// ? Function Statements:-
function printName1(name) {
  console.log(`${name}`);
}
printName1("Bubu");

/// ? Function Expression:-
const printName2 = function (name) {
  console.log(`${name}`);
};
printName2("Bubu");

/// ? Fat Arrow Function:-
/// * Type: 01 Basic Fat Arrow Function:-
let printName3a = () => {
  console.log(`Bubu`);
};
printName3a();
/// * Type: 02 Fat Arrow Function with one parameter:-
const printName3b = name => {
  console.log(name);
};
printName3("Bubu");
/// * Type: 03 Fat Arrow Function with implicit return:-
const printName3c = () => "Bubu";
console.log(`${printName3c}`);
console.log(printName3c);

const sumOfNestedFunctionsArguments = (p1) => (p2) => (p3) => {
  console.log(p1 + p2 + p3);
};
sumOfNestedFunctionsArguments(10)(10)(10);
 */
/* // ! Default Parameters :-
function add(n1 = 0, n2 = 0, n3 = 0) {
  console.log(`Sum of ${n1}, ${n2} and ${n3} is : ${n1 + n2 + n3}`);
}
add(10, 20, 30);
add(10, 20);
add(10); */
// NOTE: Spread / Rest:- (Spread: use to spread all elements of an array where 'Rest' use for parameters of a function)

// $ Taking Input from the terminal
// Importing the module //! Found ERROR!
// const readline = require("readline-sync");

// Enter the number
// let a = Number(readline.question());
// let number = [];
// for (let i = 0; i < a; ++i) {
//   number.push(Number(readline.question()));
// }
// console.log(number);

// ! Promises:-
const answer = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10);
  if (num <= 9 && num >= 7) {
    resolve("Passed " + num);
  } else {
    reject("Failed! " + num);
  }
});
answer
  .then((ele) => console.log(ele))
  .catch((err) => console.log(err))
  .finally(() => console.log(`Finally, It's over`));
