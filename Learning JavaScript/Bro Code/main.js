/* //? Printing matrix:-
const symbol = prompt("Enter a symbol");
const row = Number(prompt("Enter row number"));
const col = Number(prompt("Enter column number"));

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= col; j++) {
    document.getElementById("matrix").innerHTML += symbol;
  }
  document.getElementById("matrix").innerHTML += "<br>";
}
 */
/* //? Area of Cylinder:-
document.getElementById("button").onclick = () => {
  let radius = document.getElementById("radius").value;
  radius = Number(radius);
  const height = Number(document.getElementById("height").value);
  const area = (Math.PI * Math.pow(radius, 2) * height).toFixed(4);
  // console.log(`${radius} ${height}`);
  document.getElementById(
    "area"
  ).innerHTML = `The area of the cylinder is: ${area}`;
};
 */
/* //TODO: toLocaleString() :-
let num = 123456.789;
// num = num.toLocaleString("en-US");
// num = num.toLocaleString("hi-IN");
// num = num.toLocaleString("en-US", { style: "currency", currency: "USD" });
// num = num.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
num = 100;
// num = num.toLocaleString(undefined, { style: "percent" });
num = num.toLocaleString(undefined, { style: "unit", unit: "celsius" });
document.getElementById("toLocaleString").innerHTML = num; */
/* //? Guess The Number:-
const GUESS_NUMBER = Math.floor(Math.random() * 10 + 1);
let guess = 0;
console.log(`The number is ${GUESS_NUMBER}`);
document.getElementById("submit-choice").onclick = () => {
  const choice = document.getElementById("guess-number").value;
  guess += 1;
  if (Number(choice) === GUESS_NUMBER) {
    alert(`You enter the correct number after ${guess}`);
  } else if (Number(choice) > GUESS_NUMBER) {
    alert(`You enter a greater number`);
  } else {
    alert(`You enter a smaller number`);
  }
}; */
/* //? Temperature Converter:-
document.getElementById("submit").onclick = () => {
  const temp = document.getElementById("enter-temp").value;
  let answer;
  if (document.getElementById("celsius").checked) {
    answer = (Number(temp) - 32) * (5 / 9.0);
    answer = answer.toLocaleString(undefined, {
      style: "unit",
      unit: "celsius",
    });
    document.getElementById("results").innerHTML = `<br>The result : ${answer}`;
  } else if (document.getElementById("fahrenheit").checked) {
    answer = Number(temp) * (9.0 / 5) + 32;
    answer = answer.toLocaleString(undefined, {
      style: "unit",
      unit: "fahrenheit",
    });
    document.getElementById("results").innerHTML = `<br>The result : ${answer}`;
  }
}; */
/* //? forEach() and callBack:-
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.min(...arr));
arr.forEach(callBackFunction);
arr.forEach(printForEachLoopAndCallBackFunction);
function callBackFunction(element, index, array) {
  array[index] = element + index; //TODO: arr[i] = arr[i] + i;
}
function printForEachLoopAndCallBackFunction(element) {
  console.log(element);
}

const names = ["Rock", "John", "Jane", "Joe", "Olivia"];
names.forEach(capitilizeName);
names.forEach(printNames);
function capitilizeName(element, index, array) {
  array[index] =
    element.slice(0, element.length - 1) +
    element[element.length - 1].toUpperCase();
}
function printNames(element) {
  console.log(element);
}
*/
/* //? Array.map() :- which create a new array with the elements after operation
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayOfNumbersSquare1 = arrayOfNumbers.map(squareOfNumbers); //! OR
const arrayOfNumbersSquare2 = arrayOfNumbers.map((element) => {
  // return Math.pow(element, 2);
  return element * 2;
});
// arrayOfNumbersSquare1.forEach(printArrayElements);
arrayOfNumbersSquare2.forEach(printArrayElements);
function squareOfNumbers(element) {
  return Math.pow(element, 2);
}
function printArrayElements(element) {
  console.log(element);
}
*/
/* //? Array.filter() :- which create a new array with the only elements which are true for a conditions
const checkAdults = [18, 25, 27, 9, 36, 12, 15];
const allAdultsProcess1 = checkAdults.filter((element) => {
  return element >= 18;
}); //! OR
const allAdultsProcess2 = checkAdults.filter(checkingAdults);
const allAdultsProcess3 = checkAdults.map(checkingAdults); //! Check yourself
function checkingAdults(element) {
  return element >= 18;
  // return 1835 != 1;
}
console.log(allAdultsProcess2.toString()); */
/* //? Array.reduce() => reduced an array to a single value
const sentence = ["I", "am", "a", "Coder"];
const createSent = sentence.reduce((total, element) => {
  return total + " " + element;
});
// console.log(createSent);
const addSomeNumbers = [5, 10, 15, 20, 25, 30];
const afterAdditionNumbers = addSomeNumbers.reduce((total, element) => {
  return total + element * 2;
});
console.log(afterAdditionNumbers); */
/* //? Array.sort() => use for sorting an array
const randomOrderNumbers = [8, 9, 1, 5, 2, 6, 7, 3, 4];
const sortAscendingOrder = randomOrderNumbers.sort((a, b) => {
  return a - b;
});
console.log(sortAscendingOrder.toString());
 */
/* let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
const randomSeries = [9, 3, 6, 1, 7, 8, 5, 2, 4];
const sortedSeries = randomSeries.sort((a, b) => a - b);
// console.log(sortedSeries.toString());*/
/* //? Shuffle the cards :-
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "K", "Q", "J"];
suffleCards(cards);
console.log(cards);
function suffleCards(array) {
  let arrayLength = array.length;
  while (arrayLength > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    arrayLength -= 1;
    let temp = array[randomIndex];
    array[randomIndex] = array[arrayLength];
    array[arrayLength] = temp;
  }
  return array;
} */
/* //? Nested function:-
let userName = "Nick";
let userInbox = 0;
login();
function login() {
  getUserName();
  getUserInbox();

  function getUserName() {
    console.log(`Welcome ${userName}`);
  }
  function getUserInbox() {
    // userInbox++;
    console.log(`You have ${userInbox} messages`);
  }
} */
/* //? Map() :-
const bookPairs = new Map([
  ["The Monk who sold his Ferray", "Robin Sharma"],
  ["Atomic Habits", "James Clear"],
  ["How to make Friends and influence People", "Dal Karnegie"],
]);

// console.log(bookPairs.get("Atomic Habits"));
bookPairs.set("Hooked", "Nir Eyal");
bookPairs.delete("Hooked");
// console.log(bookPairs.has("Hooked"));

bookPairs.forEach((value, key) => {
  // console.log(`Book Name: ${key} and Author: ${value}`);
}); */
/* //? Objects :-
const CollegeAdmissionEnquary = {
  fee: "950000",
  number: "9876543210",
  isEmpty: function () {
    console.log(`Yes but the fee is ${this.fee}`);
  },
};
// CollegeAdmissionEnquary.isEmpty();
// console.log(CollegeAdmissionEnquary.number); */
//? Class and  static members:-
class CollegeStudent {
  static noOfStudents = 0;
  static collegeName = "Bitwise University";
  constructor(name, roll, cgpa) {
    this.name = name;
    this.roll = roll;
    this.cgpa = cgpa;
    CollegeStudent.noOfStudents += 1;
  }
  displayStudentInfo() {
    // console.table(`Student Name: ${this.name}`);
    console.table(this);
  }
  static displayCollegeInfo() {
    console.table(`College Name: ${CollegeStudent.collegeName}`);
    console.table(`Total no of students ${CollegeStudent.noOfStudents}`);
  }
}

const stu1 = new CollegeStudent("Nick Choppra", 169, 9.1);
const stu2 = new CollegeStudent("Oliver Green Arrow", 209, 8.4);
const stu3 = new CollegeStudent("John Wick", 108, 6.75);
// console.log(CollegeStudent.noOfStudents);
stu1.displayStudentInfo();
CollegeStudent.displayCollegeInfo();
