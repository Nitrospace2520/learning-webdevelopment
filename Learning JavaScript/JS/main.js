/**
console.log("01" >= 1); //* true
console.log("1" >= 2); //* false

///? The reason is that the equality check == and comparisons <, >, >=, <= work differently.  Comparisons convert a null to a number, treat it as 0
console.log(null > 0); //* false  therefore it's become: 0 > 0
console.log(null == 0); //* false
console.log(null >= 0); //* true  therefore it's become: 0 >= 0

console.log(typeof null); //* object
let getUrl = window.location.href;
getUrl = getUrl.replace("127.0.0.1:5501", "www.learningjs.com");
window.location.href = getUrl;
* JavaScript Numbers Prescion value:-
const num = 123.456789;
console.log(num.toPrecision(1)); //* 1e+2
console.log(num.toPrecision(2)); //* 1.2e+2
console.log(num.toPrecision(3)); //* 123
console.log(num.toPrecision(4)); //* 123.5
console.log(num.toPrecision(5)); //* 123.46
 */
/* //! String Method:-
const str1 = "Nirmalya Dhara";

console.log(str1.length);
console.log(str1.split(" "));
console.log(str1.replace("Dhara", "Nir"));
console.log(str1.toUpperCase());
console.log(str1.charAt(3));
console.log(str1.indexOf("a")); //* You can pass a string
console.log(str1.lastIndexOf("a")); //* You can pass a string
console.log(str1.slice(3, 7)); 
*/
/* //! Number Method:-
const integer = 98;
const float = 98.9;
const str = "98.9988";

console.log(integer);
console.log(float);
console.log(str);
console.log(integer + float);
console.log(integer + str);
console.log(typeof integer);
console.log(typeof float);
console.log(typeof str);
console.log(integer == str); // false 

console.log(Number.parseInt(str));
console.log(Number.parseFloat(str).toFixed(0)); // 99
console.log(Number.parseInt(true)); // NaN => Not a Number

console.log(false == 0); // Return true
console.log(false === 0); // Return false

console.log(typeof Number.toString(integer)); // string
console.log(typeof Number.parseFloat(str).toFixed(2)); // string

console.log(integer == Number.parseFloat(str).toFixed(0)); // false as Number.parserFloat(str).toFixed(0) return 99

console.log(Number.parseFloat("Nir"));
console.log(isNaN("Nir"));
console.log(Number.isNaN("Nir"));
 */
/* //! Math library:-
console.log(Math.PI);
console.log(Math.round(Math.PI)); //* 3
console.log(Math.round(3.5)); //* 4
console.log(Math.max(10, 20, 30, 40, 50, 60, 70));
console.log(Math.min(10, 20, 30, 40, 50, 60, 70));
console.log(Math.floor(3.9)); //* 3
console.log(Math.ceil(3.1)); //* 4
console.log(Math.random()); //* It will generate number from 0 to 1

////? Generate a random number from 1 to 10
console.log(Math.floor(Math.random() * 10 + 1));

console.log(Math.round(Math.tan(45 / 57.2958)));
console.log(Math);
console.log(1 / Math.pow(2, 0.5)); //*  1/root(2) => SQRT1_2
console.log(Math.pow(2, 0.5)); //*  root(2) => SQRT2
 */
/* //? Write a code that will return a letter from your name randomly?
const nam = "Nirmalya Dhara";
let index = Math.floor(Math.random() * nam.length);
console.log(nam.charAt(index)); */
/* //! IF - ELSE statement:-
const player = "rock";
const computer = "rock paper scissors".split(" ")[
  Math.floor(Math.random() * 3)
];
console.log(`The choices are player => ${player} and computer => ${computer}`);
if (player == computer) {
  console.log("Tie");
} else if (player == "rock") {
  if (computer == "paper") {
    console.log("computer wins");
  } else {
    console.log("player wins");
  }
} else if (player == "paper") {
  if (computer == "scissors") {
    console.log("computer wins");
  } else {
    console.log("player wins");
  }
} else {
  if (computer == "rock") {
    console.log("computer wins");
  } else {
    console.log("player wins");
  }
}
 */
/* //! SWITCH cases:-
const player = "rock";
const computer = "rock paper scissors".split(" ")[
  Math.floor(Math.random() * 3)
];
console.log(`The choices are player => ${player} and computer => ${computer}`);
let ans;
switch (player) {
  case computer:
    ans = "Tie";
    break;
  case "rock":
    if (computer == "paper") ans = "computer wins";
    else ans = "player wins";
    break;
  case "paper":
    if (computer == "scissors") ans = "computer wins";
    else ans = "player wins";
    break;
  case "scissors":
    if (computer == "rock") ans = "computer wins";
    else ans = "player wins";
    break;
  default:
    break;
}
console.log(ans); */
/* //! Ternary Operations:-
const player = "rock";
const computer = "rock paper scissors".split(" ")[
  Math.floor(Math.random() * 3)
];
console.log(`The choices are player => ${player} and computer => ${computer}`);
let ans =
  player == computer
    ? "Tie"
    : player == "rock" && computer == "paper"
    ? "computer wins"
    : player == "paper" && computer == "scissors"
    ? "computer wins"
    : player == "scissors" && computer == "rock"
    ? "computer wins"
    : "player wins";
console.log(ans);
 */
/* //! alert(), prompt(), confirm() :-
//* alert():-
alert("Hi, I'm learning JavaScript");

//* confirm():-
let ans = confirm("Are you learning JS ?");
console.log(ans); // ok => true  and cancel => false

//* prompt():-
let naam = prompt("What is your name ?");
console.log(`Your name is ${naam}`);
 */
/* //? First interactive game using all knowledge we learned previously:-
let playGame = confirm("Do you wanna play 'Rock-Paper-Scissors' ?");
if (playGame) {
  let player = Number.parseInt(
    prompt("Enter your choice: 1 -> rock, 2 -> paper, 3 -> scissors")
  );
  if (player >= 4 || player <= 0) {
    console.log("You enter a invalid choice");
  } else {
    let choice = "rock paper scissors".split(" ");
    let computer = Math.floor(Math.random() * 3 + 1);
    console.log(
      `Your choice -> ${choice[player - 1]} and Computer choice -> ${
        choice[computer - 1]
      }`
    );
    let answer;
    if (player == computer) {
      answer = "Tie";
    } else if (
      (player == 1 && computer == 2) ||
      (player == 2 && computer == 3) ||
      (player == 3 && computer == 1)
    ) {
      answer = "Computer";
    } else {
      answer = "Player";
    }
    console.log(`The winner is ${answer === "Tie" ? "Both" : answer}`);
  }
} else {
  console.log("Thanks you for your time");
} */
/* //! LOOPS:-
////? While loop:-
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
console.log("\n");

////? do while loop:-
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
console.log("\n");

////? for loop:-
for (let k = 0; k < 3; k++) {
  console.log(k);
}
 */
/* //! Functions:-
////? Arrow functions:-
const sum = (num1, num2) => {
  return num1 + num2;
};
const getNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};
const getProperName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(sum(7, 2));
console.log(getNameFromEmail("radheshyam@gmail.com"));
console.log(getProperName("radheSHYAM"));
 */
/* //! Scopes:-
const x = 1; //* Block level element
let y = 2; //* Block level element
var z = 3; //* Function Scope level element
const scopeFunction = () => {
  const x = 10;
  let y = 20;
  var z = 30;
  {
    const x = 100;
    let y = 200;
    var z = 300;
    console.log(`Block const x => ${x}`); //* 100
    console.log(`Block let y => ${y}`); //* 200
    console.log(`Block var z => ${z}`); //* 300
    console.log("\n");
  }
  console.log(`Scope const x => ${x}`); //* 10
  console.log(`Scope let y => ${y}`); //* 20
  console.log(`Scope var z => ${z}`); //* 300 -> function scope level element
  console.log("\n");
};
scopeFunction();
console.log(`Global const x => ${x}`); //* 1
console.log(`Global let y => ${y}`); //* 2
console.log(`Global var z => ${z}`); //* 3
 */
/* //! Arrays:-
////? Example 01:
/* const arr = ["Nir", 18, false];
arr[arr.length] = 27; //* adding new element in the array
arr[1] = 98; //* Updating the element at index 1
let newLength = arr.push("Acer"); //* 'add element to array at last index' by push() function which returns 'length of the new array'
let lastElement = arr.pop(); //* Deleting the last element from the array
/// console.log(newLength + " " + lastElement);
newLength = arr.unshift("Port"); //* Adding new element at the begining of the array
let firstElement = arr.shift(); //* Deleting the first element from the array (index 1)
/// console.log(newLength + " " + firstElement);
arr.splice(1, 2); //* Deleting 2 elements from index 1
arr.splice(1, 0, 100); //* Adding new element 100 at index 1
arr.splice(1, 0, 101, 102, 103); //* Adding new 3 elements(e.g. 101, 102, 103) from index 1
console.log(arr); 


////? Example 02:
const alphaArr = ["A", "B", "C", "D", "E"];
const alphaArr2 = ["F", "G", "H", "I", "J"];
const alphaString = alphaArr.join(""); //* also alphaArr.join() === alphaArr.join(",")
const alphaArrFromStr = alphaString.split("");
const newAlphaArr = alphaArr.slice(1, 3);
const joinAlphaArrs = alphaArr.concat(alphaArr2);
const joinAlphaArrsUsingSpreadOper = [...alphaArr, ...alphaArr2]; //* Join two arrays using spread operator

console.log(alphaArr);
console.log(alphaString);
console.log(newAlphaArr);
console.log(alphaArrFromStr);
console.log(joinAlphaArrs);
console.log(joinAlphaArrsUsingSpreadOper);
 */
/* //! Objects:-
//? Example 01:
const computer = {
  computerType: "Laptop",
  modelName: "Acer Aspire 7",
  displaySize: 14.5,
  chargingPort: true,
  accessInternet: true,
};
console.log(computer.modelName); //* another type
console.log(computer["modelName"]);


//? Example 02:
const programmer = {
  name: "Nir Dhara",
  exprience: 0,
  computerLanguage: ["C", "C++", "JAVA", "JAVASCRIPT", "PYTHON"],
  routine: {
    learningCSS: 11.0,
    practiseDSA: 4.0,
    learningJS: 7.3,
    reviseJAVA: 10.3,
  },
  bestLanguage: function () {
    /////* It's a funtion or method of programmer objects others are properties of programmer object
    return `My best language is \'${this.computerLanguage[3]}\' and best routine time is ${this.routine.learningJS}`; /////* If we use arrow function then we have to use 'object name' not 'this'
  },
};
console.log(programmer.bestLanguage());

/////* Inheritance object from object
const newProgrammer1 = Object.create(programmer);
newProgrammer1.name = "Jorden";
newProgrammer1.exprience = 1.5;
newProgrammer1.routine = { eat: 8.0, code: 10.0, sleep: 12.0 };
newProgrammer1.bestLanguage = function () {
  return `${this.name}\'s best language is \'${this.computerLanguage[1]}\' and best routine time is ${this.routine.sleep}`;
};
console.log(newProgrammer1.name);
console.log(newProgrammer1.routine);
console.log(newProgrammer1.bestLanguage());

/////* Making new object from the previous created object
const newProgrammer2 = Object.create(newProgrammer1);
newProgrammer2.name = "Radhe Shyam";
newProgrammer2.bestLanguage = function () {
  return `${this.name}\'s best language is \'${this.computerLanguage[2]}\' and best routine time is ${this.routine.code}`;
};
console.log(newProgrammer2.name);
console.log(newProgrammer2.bestLanguage());


//? Example 03:
const websiteDeveloper = {
  frontend: "Nirmalya Dhara",
  backend: "Peter Parkar",
  devops: "Kunal Khuswaha",
  blockchain: "Nitish Shah",
  aws: "Ram Krishna",
};

for (let development in websiteDeveloper) {
  console.log(
    `For ${development} development, we have ${websiteDeveloper[development]}`
  );
}
const development = Object.keys(websiteDeveloper);
const developer = Object.values(websiteDeveloper);
console.log(development);
console.log(developer);
// delete websiteDeveloper.aws; //// It will delete the property 'aws'
// console.log(websiteDeveloper.hasOwnProperty("aws"));  //// For checking the object has this proprety or not

//* Destructuring the object:-
const { frontend: dev1, backend: dev2 } = websiteDeveloper;
console.log(
  `The frontend developer -> ${dev1} \nThe backend developer -> ${dev2}`
);
const { frontend, backend, devops, blockchain, aws } = websiteDeveloper;
console.log(`Frontend -> ${frontend},\nBackend -> ${backend}`);

//// Destruction the object for functions
function getFrontendDeveloper({ frontend }) {
  return `The name of the frontend developer is: ${frontend}`;
}
console.log(getFrontendDeveloper(websiteDeveloper));
*/
/* //! Factory Functions:-
const Mathematics = (type) => {
  //// This factory functions are used for making private properties
  const module1 = "Sets, Relations and Functions";
  const module2 = "Pigeon Hole Thorem and Induction Theory";
  const module3 = "Group Theory and Graph Theory";
  return {
    syllabus: () =>
      type === "Discrete"
        ? console.log(
            `The syllabus is :\nModule1: ${module1},\nModule2: ${module2}, \nModule3: ${module3}`
          )
        : console.log("Cannot find symbol"),
  };
};
const discreteMath = Mathematics("Discrete");
discreteMath.syllabus();
 */
/* //! Classes:-
//? Example 01:
class Department {
  constructor() {
    this.professors = [];
    this.students = [];
    this.subjects = [];
  }
  addProfessors(name) {
    this.professors.push(name);
  }
  getProfessors() {
    return this.professors;
  }
  addStudents(name) {
    this.students.push(name);
  }
  getStudents() {
    return this.students;
  }
  addSubjects(name) {
    this.subjects.push(name);
  }
  getSubjects() {
    return this.subjects;
  }
}
const cseDepartment = new Department();
cseDepartment.addProfessors("Ram");
cseDepartment.addProfessors("Shyam");
cseDepartment.addProfessors("Jodu");
cseDepartment.addStudents("Soubhik");
cseDepartment.addStudents("VK");
cseDepartment.addStudents("Soubite");
cseDepartment.addSubjects("Data Structure and Algorithms");
cseDepartment.addSubjects("Computer Network");
cseDepartment.addSubjects("DataBase");
console.log(cseDepartment.getProfessors());
console.log(cseDepartment.getStudents());
console.log(cseDepartment.getSubjects());


//? Example 02:
class Vehicle {
  constructor(company, model, capacity) {
    this._companyName = company; //* _variableName denotes that we are declaring this variable as private although this is not private
    this._modelName = model;
    this._engineCapacity = capacity;
  }
  isElectical() {
    return this._companyName === "Tesla";
  }
}
class Car extends Vehicle {
  constructor(company, model, capacity, doors, seats) {
    super(company, model, capacity);
    this.noOfDoors = doors;
    this.noOfSeats = seats;
  }
  isElectical() {
    if (this._companyName === "Tesla") {
      return true;
    } else {
      return false;
    }
  }
}
const tataNano = new Car("TATA", "Nano 156s", 156, 4, 4);
console.log(tataNano.isElectical());
const teslaEV1 = new Car("Tesla", "EV1", 250, 2, 4);
console.log(teslaEV1.isElectical()); 


//? Example 03:
class Subject {
  bookName = "Subject Name";
  #authorName = "Author Name";
  constructor(bookName, author) {
    this.bookName = bookName;
    this.#authorName = author;
  }
  getBookName() {
    return this.bookName;
  }
  getAuthorName() {
    return this.#authorName;
  }
}

const math = new Subject("Mathematics The Principle", "Soubhik Dhara");
console.log(math.getAuthorName());
math.bookName = "Not a Mathematics";
console.log(math.bookName);
*/
/* //! JSON:-
//* JSON: JavaScript Object Notation
//* It is used to send and recieve text file. It's a language independent text format used in various langagues.
const createObj = {
  name: "Nirmalya",
  hobbies: ["eat", "code", "sleep"],
  learningJS: true,
  exprience: 1.5,
  job: function () {
    return `I love my ${this.hobbies[1]} job`;
  },
};
const obj1 = Object.create(createObj);
console.log(obj1);
console.log(createObj);
console.log(obj1.job());

////? Send text as JSON file:-
const sendJSON = JSON.stringify(createObj); /////* NOTE: function() cannot be stringify as JSON text file so all object's function will be cancel or surpass
console.log(sendJSON);
console.log(sendJSON.name); //// We cannot use the object's properties to access data from JSON text file so output : 'undefined'

////? Recieve JSON text file which is sended:-
const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON); ///// The functions of the object cannot be got as those are already cancel when send as JSON file
console.log(recieveJSON.name); //// We can access all the properties of the recieve JSON text file
 */
/* //! Errors and Errors Handling:-
////? Errors Examples:-
//* Example 01: "ReferenceError"
// console.log(nir);
//* Example 02: "SyntaxError"
// const name ;
//* Example 03: "TypeError"
// const name = "Nir";
// name = "ND";

// name1111 = 100; // This is valid
// console.log(typeof name1111); //// number

////? Creating our own customErrors:- using 'throw' keyword
//* Example 01:
class customError {
  constructor(message) {
    this.name = "CustomError";
    this.message = message;
    this.stack = `Uncaught ${this.name}: ${this.message}`;
  }
}
function makeError1() {
  try {
    throw new customError("This is a custom error");
  } catch (err) {
    console.error(err);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
    console.table(err);
  }
}
makeError1();
//* Example 02:
function MakeError2() {
  try {
    throw new Error("This is an error");
  } catch (err) {
    console.error(err);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
    console.table(err);
  }
}
MakeError2(); 
////? Errors Handling:- using try-catch-finally block
//* Example 01:
function errorHandling() {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 === 1) {
        throw new Error(`${i} is an odd number`);
      }
      console.log(`${i} is an Even Number`);
    } catch (err) {
      // console.table(err);
      console.error(err);
    } finally {
      console.log("Finally...");
      i++;
    }
  }
}
errorHandling();
*/
/* //! DOM Manupulation (Document Object Model):-
// const view1 = document.getElementById("view1");
// const view2 = document.querySelector("#view2");
// console.log(view1);
// view1.style.display = "none";
// console.log(view2);
// console.log(window.document.documentElement);
// console.log(window.document.body);
// console.log(document.body.children);
// console.log(window.document.title);
// console.log(document.documentURI);
// view1.style.display = "none";
// view2.style.display = "flex";

const view1 = document.getElementById("view1");
// console.log(view1);
const view1Class = document.getElementsByClassName("view1");
// console.log(view1Class);
const divsOfview1 = view1.getElementsByTagName("div");
// console.log(divsOfview1);
const evenDivsOfview1 = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivsOfview1);

const sectionNodeList = document.querySelectorAll("section");
// console.log(sectionNodeList);
const firstSectionNode = document.querySelectorAll("section:nth-child(1)");
// const firstSectionNode = sectionNodeList.querySelector("section:nth-child(1)");  //! Error
// console.log(firstSectionNode);
const allDivsOfFirstSectionNode = view1.querySelectorAll("div");
// console.log(allDivsOfFirstSectionNode);
const firstDivOfFirstSectionNode = view1.querySelector("div:nth-child(1)"); //* selecting the first div of view1 id
// console.log(firstDivOfFirstSectionNode);
// firstDivOfFirstSectionNode.style.position = "sticky";
// firstDivOfFirstSectionNode.style.top = "30px";
for (let i = 0; i < evenDivsOfview1.length; i++) {
  evenDivsOfview1[i].style.backgroundColor = "white";
  evenDivsOfview1[i].style.color = "black";
}

const navText = document.querySelector("nav h1");
// console.log(navText.textContent);
navText.textContent = "Hello World!";
// console.log(navText);
navText.innerHTML = `<i>'JAVASCRIPT'</i> - DOM Manipulation`;
// console.log(navText.textContent);
// console.log(navText);

const navBar = document.querySelector("nav");
navBar.innerText = `Learning <i>JAVASCRIPT</i> DOM Manipulation`;
// console.log(navBar.textContent);
navBar.innerHTML = `<i>Learning <u>DOM Manipulation</u></i> <p>let's learn about DOM manipulation using javascript</p>`;
// console.log(navBar.textContent);

//? For section 2 creating 12 divs like previous page:-
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
while (view2.lastChild) {
  view2.lastChild.remove();
}
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.color = "#fff";
  newDiv.style.backgroundColor = "black";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};
// createDivs(view2, 12);
for (let index = 1; index <= 12; index++) {
  createDivs(view2, index);
}
 */
/* //! JavaScript Event Listeners :-
//TODO: Syntax: addEventListener(even, function, useCapture) :-
// //? example: 01
// const view2 = document.querySelector("#view2");
// const div = view2.querySelector("div");
// const h2 = div.querySelector("h2");

// //* addEventListener to h2
// const clickingOnH2 = () => {
//   alert("You just click the h2 ");
// };
// // h2.addEventListener("click", clickingOnH2, false);
// // h2.removeEventListener("click", clickingOnH2, false); //* for removing the eventListener
// h2.addEventListener("dblclick", (event) => {
//   console.log(event.target.innerText);
//   event.target.innerText = "clicked !";
// });

//? Example 02: (for section: 02)
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log(`readyState complete`);
    initApp(); //* User defined function for activing all event listener
  }
});
const initApp = () => {
  const view2 = document.querySelector("#view2");
  const div = view2.querySelector("div");
  const h2 = div.querySelector("h2");

  view2.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      // event.target.style.backgroundColor = "lightblue";
      view2.classList.toggle("teal");
      view2.classList.toggle("darkblue");
    }
    // true
  );
  div.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      // event.target.style.backgroundColor = "teal";
      div.classList.toggle("black");
      div.classList.toggle("darkblue");
    }
    // true
  );
  h2.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      const isClicked = event.target.textContent;
      if (isClicked === "2nd View") {
        event.target.textContent = "Clicked !";
      } else {
        event.target.textContent = "2nd View";
      }
    }
    // true
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
    nav.style.display = "flex";
    nav.style.justifyContent = "center";
    nav.style.alignItems = "center";
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};  
///? Example: 03 (for section: 03) 
*/
/* //! Importing Module and  Higher Order Functions (The functions which are passed as a arguments of another functions or which are returned from a another function):-
import { posts } from "./posts.js";

// posts.forEach((post) => console.log(post));

const filteredPosts = posts.filter((post) => post.userId === 3);
// filteredPosts.forEach((post) => console.log(post));

const mapFilteredPosts = filteredPosts.map((post) => post.id * 2);
// mapFilteredPosts.forEach((post) => console.log(post));

const reduceMapFilteredPosts = mapFilteredPosts.reduce((sum, id) => sum + id);
console.log(reduceMapFilteredPosts);
 */
//! Fetch, Async, Await:-
/* ///? Callback:-
//* Example: 01
function exampleOfCallbackFunction(parameter1, callbackFunction) {
  // Do stuff
  callbackFunction();
}
//* Example: 02 (ERROR)
function firstFunction(parameter1) {
  function secondFunction(parameter2) {
    function thirdFunction(parameter3) {
      // .....
    }
  }
}
//* Example: 03
let params = null;
firstFunction(params, function () {
  secondFunction(params, function () {
    thirdFunction(params, function () {
      // .....
    });
  });
}); 

///? Promises:- (It has 3 states:- Pending, Fulfilled, Rejected)
//* Example: 01
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("The promise is resolved");
  } else {
    reject("The promise is rejected");
  }
});
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) resolve("Your next promise is resolved");
    else reject("Your next promise is rejected");
  }, 3000);
});
// console.log(myPromise);
myPromise
  .then((value) => `${value}. You are good to go.`)
  .then((newVal) => `Yes, ${newVal}`)
  .then((newValue) => {
    sessionStorage.setItem("mySessionStore1", newValue);
    sessionStorage.removeItem("mySessionStore1");
    const mySessionData = sessionStorage.getItem("mySessionStore1");
    console.log(mySessionData);
  })
  .catch((err) =>
    console.error(
      `No, ${err} so you can't login at this time try after sometime.`
    )
  );

myNextPromise
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

myPromise
  .then((val) => console.log(`${val}. You're good to go.`))
  .catch((err) => console.error(err));
 */

/* ///? Fetch() :-
//* Example: 01
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((dataArray) => {
    dataArray.forEach((user) => {
      console.log(user);
    });
  });
// setTimeout(() => console.log(users), 3000);

//* Example: 02
const todos = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) =>
    data
      .filter((todo) => todo.userId === 1 && todo.id % 4 === 0)
      .forEach((todo) => console.log(todo))
  );
*/
/* //? Async / Await:-
//* Example: 01
const Albums = {
  albumLists: [],
};
// async function getAlbumFunction() {...} //* Another syntax for async
const getAlbumFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const getAlbum = await response.json();
  const albums = getAlbum.filter((val) => val.userId === 2 && val.id % 2 === 0);
  // Albums.albumLists = albums; //* Let set it in another function named setAlbumLists()
  return albums;
};
// getAlbumFunction();
// setTimeout(() => console.log(Albums.albumLists), 2000);
const setAlbumLists = async () => {
  const getAlbumLists = await getAlbumFunction();
  Albums.albumLists = getAlbumLists;
  Albums.albumLists.forEach((val) => console.log(val));
};
setAlbumLists();

//* Example: 02
const getEmails = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const getUsers = await users.json();
  const getUsersEmail = getUsers.map((user) => user.email);
  postToWebPage(getUsersEmail);
};
const postToWebPage = (data) => {
  data.forEach((element) => {
    console.log(element);
  });
};
// getEmails();

//* Example: 03 (fetch - 'GET' request)
const getJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "Application/json",
      // Accept: "text/plain",
    },
  });
  const jokeJSON = await res.json();
  const joke = jokeJSON.joke;
  console.log(jokeJSON);

  // const jokeText = await res.text(); //* for 'Accept: "text/plain"'
  // console.log(jokeText);
};
getJoke();

//* Example: 04 (fetch - 'POST' request)
const PostJokeObject = {
  id: "sPRnOfiyAAd",
  joke: "At the boxing match, the dad got into the popcorn line and the line for hot dogs, but he wanted to stay out of the punchline.",
};
const postJoke = async (PostJokeObj) => {
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(PostJokeObj),
  });
  const postResponse = await res.json();
  console.log(postResponse.headers);
};
postJoke(PostJokeObject);
*/
//* Example: 05 (fetch )
const getJokeCustomishly = async (firstName, lastName) => {
  try {
    const response = await fetch(
      `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]` ///Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://api.icndb.com/jokes/random?firstName=Bruce&lastName=Wyane. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 500   ///* Internal Server Error
    );
    const getData = await response.json();
    // console.log(getData.value.joke);
  } catch (error) {
    console.log("error!");
  }
};
getJokeCustomishly("Clerk", "Kent");
