/* //! Practice:-
var temp = 10;
function checkTempValue() {
  console.log(temp);
  var temp = 20;
}
checkTempValue();
 */
/* //! Practice on Objects:-
/// ? Example: 01
const Nirmalya = {
  wakeUp: "6.00 AM",
  fresh: "30 mins",
  yoga: "30 mins",
  bookReading: "30 mins",
  learningJS: "7.30 AM - 9.30 AM",
  college: function () {
    return;
    `Do nothing just waste time for ${
      (Number(this.fresh.slice(0, 2)) * 2 * 7) / 60
    } hours of 24 hours`;
  },
};
const ND = Object.create(Nirmalya); //* Inheritance
ND.bookReading = "1 hour";
ND.college = function () {
  return `I enjoy my college life`;
};
ND.wakeUp = "9.00 AM";

const Nir = Object.create(ND);
for (let work in Nir) {
  console.log(`${work} = ${Nir[work]}`);
}

//? Object Destructuring:-
const { wakeUp: activity1, fresh: activity2, college: activity3 } = Nirmalya;
console.log(activity1);
console.log(activity2);
console.log(activity3);
// console.log(wakeUp);  //! ReferenceError: wakeUp is not defined
* Object Destructuring as parameter of a function:-
const getWakeUpTime = ({ wakeUp: activity1, bookReading: activity2 }) => {
  console.log(`The person wakes up at ${activity1} and study for ${activity2}`);
};
getWakeUpTime(Nirmalya); 

///? Example: 02
const User = {
  name: "Nirmalya Dhara",
  age: 20,
  address: {
    village: "Uttarderiapur",
    postoffice: "Radhamohanpur",
    policestation: "Sonamukhi",
    distict: "Bankura",
    zip: 722207,
  },
  college: {
    name: "Academy of Technology",
    department: "Computer Science and Enginnering",
    address: {
      village: "Adisatpagram",
      postoffice: "Addconagar",
      policestation: "Magra",
      distict: "Hooghly",
      zip: 712121,
    },
  },
};
//* Object Destructuring for object of objects:
//* {visit link: https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/}
const { address: permanentAddress } = User;
const {
  address: { distict: permanentDistict },
} = User;
const {
  college: { address: collegeAddress },
} = User;
const {
  college: {
    address: { distict: collegeDistict },
  },
} = User;
console.log(permanentAddress);
console.log(permanentDistict);
console.log(collegeAddress);
console.log(collegeDistict); 
*/
/* //! Practice on Classes:-
///? Example 01:
//* For further information visit: {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes}
class User {
  /**
   *
   * @param {string} name
   * @param {number} id
   ****
  static computerName = "ACER Aspire 7"; //* It's a static variable
  #productKey = "9876 5432 1001 2345"; //* It's a private variable
  constructor(name, id) {
    this._name = name;
    this._id = id;
    this.computer = "Acer";
  }
  get name() {
    return this._name;
  }
  /**
   * @param {number} newId
   ****
  set id(newId) {
    this._id = newId;
  }
  printInformation() {
    console.log(
      `Computer Brand: ${this.computer}, User name: ${this._name} and User ID: ${this._id}`
    );
  }
}

const user1 = new User("Nirmalya Dhara", 16900121061);
user1.id = 211690100110081;
user1.printInformation();
User.computerName = "ACER Aspire 5";
const user2 = new User("Nir", 23431);
console.log(User.computerName);
// console.log(user2.#productKey);  ////! SyntaxError: Private field '#productKey' must be declared in an enclosing class

///? Example 02: Inheritance
class Human {
  static speciesName = "Homo sapiens";
  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {number} height
   ****
  constructor(name, age, height) {
    this._name = name;
    this._age = age;
    this._height = height;
  }
  information() {
    return `The human's name is ${this._name} and he/she is ${this._age} years old and he/she is ${this._height} feet, he/she is under ${Human.speciesName} species`;
  }
}
class Gamer extends Human {
  #nallaBrogarChapri = true;
  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {number} height
   * @param {number} gameDuration
   *****
  constructor(name, age, height, gameDuration) {
    super(name, age, height);
    this._gameDuration = gameDuration;
  }
  information() {
    const humanInformation = super.information().replace("human", "gamer");
    //* Further information about super keyword in js visit: {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super};
    return `${humanInformation} and he/she can play upto ${
      this._gameDuration
    } hrs and he/she is a ${this.#nallaBrogarChapri ? "Nalla" : "Money Maker"}`;
  }
}
const humanBeing1 = new Human("Kalin Bhaiyaa", 45, 5.9);
console.log(humanBeing1.information());
const gamer1 = new Gamer("Aristotle", 20, 5.5, 5);
console.log(gamer1.information()); */
/* //! Practice on JSON *
const User = {
  name: "Nirmalya Dhara",
  age: 21,
  hobbies: ["code", "eat", "sleep"],
  checkPassion: function () {
    console.log(`I am ${this.name}. I am an Open Source Contributor`);
  },
};
const sendJSON = JSON.stringify(User);
console.log(sendJSON);
const fetchJSON = JSON.parse(sendJSON);
console.log(fetchJSON);  */
/* //! Practice on try-catch-finally:-
let countIteration = 0;
while (true) {
  const wastingTime = prompt("Do you wasting your time ?");

  if (wastingTime.toLowerCase() === "yes") {
    try {
      throw new Error("Don't waste your valuable time :) ");
    } catch (err) {
      alert(err);
    } finally {
      countIteration++;
    }
  } else {
    alert(`You waste your time ${countIteration} time`);
    break;
  }
} */
/* //! DOM Manipulation:-
//TODO: getElementBy.. gives => HTMLCollectionList
//TODO: querySelectorAll gives => NodeLists

//? Selecting the title:-
const title = document.getElementById("dom-manipulation-title");
title.innerHTML = "Document Object Manipulation";
title.style.backgroundColor = "teal";
title.style.color = "whitesmoke";
title.style.textShadow = "5px 5px black";

//? Selecting all the chiled of the body except first one the title:-
const childsOfBody = document.querySelector("body").children;
const firstChildOfBody = Array.from(childsOfBody)[0]; //* It will select the first child of the body that is in this case is the heading or title of the page.
const secondChildOfBody = Array.from(childsOfBody)[1];
const thirdChildOfBody = Array.from(childsOfBody)[2]; //* It will select the third child of the body in this case the hidden div
// console.table(childsOfBody);
// secondChildOfBody.style.display = "none";
//* Let do DOM on the third child of the body:-
// thirdChildOfBody.style.display = "flex";
thirdChildOfBody.style.padding = "2rem";
thirdChildOfBody.innerHTML =
  "I am Nirmalya Dhara. Today I am practising on Document Object Manipulation of JavaScript. By using DOM we can easly manipulate website and make the website more attractive and user friendly.";
thirdChildOfBody.style.justifyContent = "center";
thirdChildOfBody.style.alignItems = "center";

//? Selecting all the boxs:-
const boxNodeLists = document.querySelectorAll(".box");
// for (let index = 0; index < boxNodeLists.length; index++) {
//   const element = boxNodeLists[index];
//   element.style.color = "whitesmoke";
// }
const allBoxsOfSecondChildOfBody = secondChildOfBody.querySelectorAll("div"); //* another way selecting all box nodelist
const selectingAllTheEvenIndexBoxs = secondChildOfBody.querySelectorAll(
  "div:nth-of-type(2n)"
);
const selectingAllTheEvenIndexBoxs2ndWay = Array.from(
  allBoxsOfSecondChildOfBody
).filter((currentValue, index) => index % 2 != 0);
// console.log(selectingAllTheEvenIndexBoxs2ndWay);
// for (let index = 0; index < selectingAllTheEvenIndexBoxs.length; index++) {
//   const element = selectingAllTheEvenIndexBoxs[index];
//   element.style.backgroundColor = "darkBlue";
//   element.style.color = "whitesmoke";
//   element.style.boxShadow = "1px 1px 10px 10px whitesmoke";
// }

//? selecting the parent element of the boxs:-
const parentElementOfBoxs = selectingAllTheEvenIndexBoxs[0].parentElement;
// const parentNodeOfBoxs = selectingAllTheEvenIndexBoxs[0].parentNode; //* same as parentElementOfBoxs the previous one
// console.log(parentElementOfBoxs.children); //* It will select the only child nodes except #text nodes
// console.log(parentElementOfBoxs.childNodes); //* This will select all the child nodes of the parentElementOfBoxs including #text nodes
// console.log(parentElementOfBoxs.classList); //* the class list of the element
// console.log(parentElementOfBoxs.firstChild);
// console.log(parentElementOfBoxs.firstElementChild);
// console.log(parentElementOfBoxs.lastChild);
// console.log(parentElementOfBoxs.lastElementChild);
// console.log(selectingAllTheEvenIndexBoxs[0].nextSibling);
// console.log(selectingAllTheEvenIndexBoxs[0].nextElementSibling);
// console.log(selectingAllTheEvenIndexBoxs[0].previousSibling);
// console.log(selectingAllTheEvenIndexBoxs[0].previousElementSibling);
// console.log(
//   selectingAllTheEvenIndexBoxs[0].nextElementSibling.nextElementSibling
//     .nextElementSibling
// );

//? Let's select random box from the secondChildOfBody:-
// const allBoxsOfSecondChildOfBody2ndWay = Array.from(
//   Array.from(document.querySelector("body").children)[1].children
// );
// console.log(allBoxsOfSecondChildOfBody2ndWay);
// const selectRadomBox =
//   allBoxsOfSecondChildOfBody2ndWay[
//     Math.floor(Math.random() * allBoxsOfSecondChildOfBody2ndWay.length)
//   ];
// selectRadomBox.style.backgroundColor = "#f00";

//? Lets's Style the third Child of body:-
const secondChildOfBodyMeansClassExample1 = Array.from(
  document.querySelector("body").children
)[1];
const thirdChildOfBodyMeansClassExample1 = Array.from(
  document.querySelector("body").children
)[2];
secondChildOfBodyMeansClassExample1.style.display = "none";
thirdChildOfBodyMeansClassExample1.style.display = "flex";
thirdChildOfBodyMeansClassExample1.style.flexFlow = "row wrap";
thirdChildOfBodyMeansClassExample1.style.gap = "1.5rem";
while (thirdChildOfBodyMeansClassExample1.lastChild) {
  thirdChildOfBodyMeansClassExample1.lastChild.remove();
}
/**
 * @param {string} parent: thirdChildOfBodyMeansClassExample1
 * @param {number} iter counter for counting new created divs
 **
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = iter;
  newDiv.style.width = "120px";
  newDiv.style.height = "120px";
  newDiv.style.border = "2px solid #00f";
  newDiv.style.backgroundColor = "darkblue";
  newDiv.style.color = "whitesmoke";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";

  if (parent instanceof Element) {
    parent.append(newDiv);
  } else {
    console.error("Invalid parent element");
  }
};
for (let index = 0; index < 12; index++) {
  createDivs(thirdChildOfBodyMeansClassExample1, index + 1);
}
 */
/* //! JavaScript EventListener:-
///? Example: 01
let count = 0;
let iteration = 1;
document
  .querySelector("#dom-manipulation-title")
  .addEventListener("click", (event) => {
    const childrenOfBody = Array.from(document.querySelector("body").children);
    const secondChildBody = childrenOfBody[1];
    const thirdChildBody = childrenOfBody[2];
    if (count % 2 == 0) {
      secondChildBody.style.display = "none";
      thirdChildBody.style.display = "flex";
      thirdChildBody.style.alignItems = "center";
      thirdChildBody.style.justifyContent = "center";
      thirdChildBody.style.flexFlow = "row wrap";

      const createDiv = (parent, iter) => {
        const newDiv = document.createElement("div");
        newDiv.style.height = "100px";
        newDiv.style.width = "100px";
        newDiv.style.border = "2px solid #f5f5f5";
        newDiv.style.backgroundColor = "#00f";
        newDiv.innerText = iter;
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
        parent.append(newDiv);
      };
      createDiv(thirdChildBody, iteration);
      iteration++;
    } else {
      secondChildBody.style.display = "flex";
      thirdChildBody.style.display = "none";
    }
    count++;
  }); *

///? Example: 02
// document.addEventListener("readystatechange", (event) => {
const childrenOfBody = Array.from(document.querySelector("body").children);
childrenOfBody[1].style.display = "none";
childrenOfBody[2].style.display = "flex";
childrenOfBody[2].style.alignItems = "center";
childrenOfBody[2].style.justifyContent = "center";
childrenOfBody[0].style.zIndex = "2";
childrenOfBody[0].style.backgroundColor = "#f5f5f5";

let prev = childrenOfBody[2].style.backgroundColor;
/**
 *
 * @param {HTMLElement} parent the container
 * @param {string} color color of the container
 * @param {string} className name of the container as class of css
 * @returns
 *********
const createDiv = (parent, color = "#000", className = "container") => {
  const newDiv = document.createElement("div");
  newDiv.classList.add(className);
  parent.style.padding = "5rem";
  parent.style.backgroundColor = prev;
  newDiv.style.height = parent.style.height;
  newDiv.style.width = parent.style.width;
  newDiv.style.padding = "3rem";
  newDiv.style.border = "2px solid #f5f5f5";
  newDiv.style.backgroundColor = color;
  newDiv.style.display = "flex";
  newDiv.style.flexFlow = "row wrap";
  newDiv.style.overflow = "hidden";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
  prev = color;
  return newDiv;
};
const secondView = childrenOfBody[2];
const mainContainer = createDiv(secondView, "#000", "main-container");
const subContainer1 = createDiv(mainContainer, "#00f", "sub-container");
// const subContainer2 = createDiv(mainContainer, "#0ff");
// const subContainer3 = createDiv(mainContainer, "#005");
// const subContainer4 = createDiv(mainContainer, "#0f0");
subContainer1.innerHTML = `<h1 style="color: #f5f5f5; text-shadow: 5px 5px black">EVENT</h1>`;
// });
initapp();
function initapp() {
  const mainContainer = secondView.querySelector(".main-container");
  const subContainer = secondView.querySelector(".sub-container");
  const title = secondView.querySelector("h1");

  mainContainer.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "#ffc";
      event.target.style.transition = "all 3s";
    },
    false
  );
  subContainer.addEventListener(
    "click",
    (event) => {
      event.target.style.backgroundColor = "#f5f";
      event.target.style.transition = "all 5s";
    },
    false
  );
  title.addEventListener(
    "click",
    (event) => {
      title.style.color = "#00f";
      event.target.textContent = "Clicked!";
      event.target.style.transition = "all 7s";
    },
    false
  );
}

///? Example: 03 (In the case of form)
document.addEventListener("readystatechange", (event) => {
  initApp();
});

const childrenOfBody = Array.from(document.querySelector("body").children);
childrenOfBody[1].style.display = "none";
childrenOfBody[2].style.display = "flex";
childrenOfBody[2].style.alignItems = "center";
childrenOfBody[2].style.justifyContent = "center";
childrenOfBody[0].style.zIndex = "2";
childrenOfBody[0].style.backgroundColor = "#555";
/**
 * returns HTMLElement
 * @param {HTMLElement} parent the element which is appending to
 * @param {string} bgColor background color of the element
 * @param {string} clsName class name of the element
 ********
const createElementForParent = (parent, bgColor, clsName, eleName) => {
  const newSection = document.createElement(eleName);
  newSection.style.width = parent.style.width;
  newSection.style.height = parent.style.height;
  // newSection.style.padding = "3rem";
  parent.style.padding = "2rem";
  newSection.style.border = "3px solid #fff";
  newSection.style.backgroundColor = bgColor;
  newSection.style.color = "#f5f5f5";
  newSection.classList.add(clsName);
  parent.append(newSection);
  return newSection;
};
const myForm = createElementForParent(
  childrenOfBody[2],
  "#0f0",
  "my-form",
  "form"
);
const label = createElementForParent(myForm, "#00f", "name", "label");
label.textContent = `Enter Your Name:`;
const input = createElementForParent(myForm, "#005", "input-name", "input");
input.style.fontSize = "1rem";
const submitButton = createElementForParent(
  myForm,
  "#001",
  "submit-button",
  "button"
);
submitButton.style.fontSize = "1rem";
submitButton.style.padding = "0.2rem";
submitButton.textContent = "Submit";
submitButton.id = "name";
const initApp = () => {
  const myForm = document.querySelector(".my-form");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); //* It will prevent from refreshing the form again and again.
    console.log("Submitted");
  });
};
*/
/* //! Web Storage API:-
const myArray = ["code", "eat", "sleep"];
const myObject = {
  name: "Nirmalya Dhara",
  myHobbies: ["eat", "code", "sleep"],
  logName: function () {
    return `${this.name}`;
  },
};
//? Session Storage:-
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
sessionStorage.clear();
const gottenSessionStore = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(gottenSessionStore);

// sessionStorage.setItem("mySessionStore2", JSON.stringify(myArray));
// const gottenSessionStoreForArray = JSON.parse(
//   sessionStorage.getItem("mySessionStore2")
// );
// console.log(gottenSessionStoreForArray);
// console.log(myArray.toString());

//? Local Storage:-
localStorage.setItem("mylocalStore", JSON.stringify(myObject));
// localStorage.removeItem("mylocalStore");
localStorage.clear();
// const key = localStorage.key(0);
const storageLength = localStorage.length;
const gottenlocalData = JSON.parse(localStorage.getItem("mylocalStore"));
// console.log(gottenlocalData);
// console.log(storageLength);
 */
/* //! JavaScript Modules:-
//? Example: 01
export function predictingFuture() {
  return `Let's predict the future about our Universe`;
}
export default function livingInPresent() {
  return `Let's us live in present not in future and not in past`;
}
export const learningFromPast = () => {
  return `Let's us aquire knowledge from our past mistakes`;
};

//? Export function to another module syntax example 01
// export default livingInPresent; //* Every module have one default export
// export { predictingFuture, learningFromPast };
 */
