/* const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const modifyTitle = document.querySelector(".name");

const changeName = () => {
  if (modifyTitle.textContent === "Nirmalya Dhara") {
    modifyTitle.innerHTML = "a Software Developer";
  } else {
    modifyTitle.innerHTML = "Nirmalya Dhara";
  }
};
let interval1 = setInterval(() => {
  changeName();
}, 3000);
button.addEventListener("click", (e) => {
  clearInterval(interval1);
  console.log("Button clicked");
}); */
/* //! API:-
const createImage = (url, name) => {
  const block = document.querySelector(".block");
  const img = document.createElement("img");
  img.style.display = "block";
  img.style.backgroundColor = "black";
  img.src = url;
  block.appendChild(img);
  block.innerHTML += `<h1 style="">${name}</h1>`;
};
const reqURL = "https://api.github.com/users/nitrospace2520";
const xhr = new XMLHttpRequest();
xhr.open("GET", reqURL);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const response = JSON.parse(this.responseText);
    console.log(response);
    createImage(response.avatar_url, response.name);
  }
};
xhr.send(); */
/*//! Promises:-
 //? Example: 01
const loginStatus = new Promise((resolve, reject) => {
  const login = true;
  setTimeout(() => {
    if (login) resolve("Now you can successfully login");
    else reject("Please provide valid information");
  }, 1000);
})
  .then((resolve) => {
    console.log(`${resolve} and Welcome Back`);
  })
  .catch((reject) => {
    console.log(`${reject} and try again`);
  }); 
///? Example: 02
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Nirmalya Dhara", company: "Github" });
  }, 3000);
})
  .then((employee) => {
    // console.log(`Name: ${employee.name} and Company: ${employee.company}`);
    return employee.name;
  })
  .then((name) => {
    console.log(`${name}`);
  })
  .catch((error) => {
    console.table(`${error}`);
  });
///? Example: 03
const reqURL = "https://api.github.com/users/nitrospace2520";
const githubUser = new Promise((resolve, reject) => {
  const err = !true;
  if (!err) {
    resolve("Hya Chand me vi dag");
  } else {
    reject("Suraj me vi dag");
  }
});
const printGithubUserData = async () => {
  try {
    const data = await githubUser;
    console.log(`${data}`);
  } catch (error) {
    console.log(`${error}`);
  }
};
printGithubUserData();
*/
/* //! fetch():-
///? Example: 01
const reqURL = "https://api.github.com/users";
const githubUsers = async () => {
  try {
    const res = await fetch(reqURL);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// githubUsers();
///? Example: 02
const users = fetch(reqURL)
  .then((res) => {
    return res.json();
  })
  .then((resJSON) => {
    console.log(resJSON);
  })
  .catch((err) => console.log(err));
 */
/* 
// function random() {
  //   console.log(this);
// }

// random();
// const random = () => {
  //   console.log(this);
// };

// random();
*/
/* //! Prototype:-
function Users(username, gmail, password) {
  this.username = username;
  this.gmail = gmail;
  this.password = password;
  this.login = function () {
    console.log(
      `Username: ${this.username}, Gmail: ${this.gmail}, Password: ${this.password}`
    );
  };
  // return this;
}
const user1 = new Users("nir9933", "nir.dhara@.atinus.com", 169);
// const user2 = new Users("ND1729", "nd.c3o@.atinus.com", 548);
// console.log(typeof user1 === Function); ///* false
// user1.getUserName = usernaem = () => {
//   console.log(`${this.username}`);
// };
user1.power = 100;
console.log(Users.prototype); 
///? Example: 02
function getInformation(name) {
  this.name = name;
  // return name + " is a bad college";
}
getInformation.prototype.nameOfThatCollege = function () {
  this.name = "Radhe";
  // return this.name;
};
getInformation.prototype.collegeList = Object({
  bestcollege: "IITs",
  avgCollege: "NITs",
});
// console.log(getInformation);
// console.log(getInformation.prototype);
const nameOfCoder = new getInformation("Shyam");
console.log(nameOfCoder);
*/

/* //! Creating new functions for Object object:-
Object.prototype.gettingYourName = function (name) {
  console.log(`Hello! I'm ${name}`);
};
let arr = ["IITs", "NITs", "IIITs"];
let obj = {
  superHeroName: "Bruce",
  superHeroPower: "Rich",
  superHeroDialog: "I'm rich",
};
// arr.gettingYourName("Wayne");
// obj.gettingYourName("Wayne");
//TODO: Do research about Object.getPrototypeOf(B_obj, A_obj); */

/* //! ///TODO:- create a new property trueLength for an string;
// let coderName = "nirmalya     ";
// console.log(coderName.trueLength); ///* should return 8
String.prototype.trueLength = function () {
  console.log(`The true length of the ${this} is : ${this.trim().length}`);
};
let theCoder = new String("Nirmalya    ");
theCoder.trueLength();
"         Bruce Wyane                      ".trueLength(); */

/* //* Let's do it man
function SetStudent(name, roll) {
  this.name = name;
  this.roll = roll;
  // console.log(this.name, this.roll);
}
function GetMarks(name, roll, subject) {
  SetStudent.call(this, name, roll);
  this.subject = subject;
}

const student1 = new GetMarks("Bruce Wyane", 61, "Computer Science");
console.log(student1); */

/* //? Why do we use classes insteadof objects:-
const userDb = ["nir9933", "ND@CSE", "Nir___2025"];
function SignUp(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.loginCount = 0;
  this.canSignup = function canSignup() {
    if (userDb.indexOf(username) !== -1) {
      return "can't sign up";
    } else {
      return "yes you can sign up";
    }
  };
}
SignUp.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};
SignUp.prototype.login = function (username, password) {
  if (this.username === username && this.password === password) {
    this.loginCount += 1;
    console.log(`Successfully Logged in`);
  } else {
    console.log(`Please enter a valid password or username`);
  }
};
SignUp.prototype.getLoginCount = function () {
  console.log(this.loginCount);
};
const user1 = new SignUp("nir99330", "nir@cse.com", 123456);
// console.log(user1.canSignup());
// user1.changePassword(52987);
user1.login("nir9933", 123456);
user1.login("nir9933", 123456);
user1.login("nir9933", 123456);
console.log(user1); */

/* //! JavaScript bind() function:-
class React {
  constructor() {
    this.library = "React";
    this.server = "http://www.localhost.3000";
    // document.querySelector("button").addEventListener("click", (event) => {
    //   this.clickButton();
    //   document.querySelector("button").innerHTML = "Clicked";
    // });
    document
      .querySelector("button")
      .addEventListener("click", this.clickButton.bind(this));
  }
  clickButton() {
    console.log(`Button clicked`);
    console.log(this);
  }
}
const obj = new React();
 */

//! Can we change the value of Math.PI
// console.log(Math.PI);
// Math.PI = 7;  //* TypeError: "PI" is read-only
// console.log(Math.PI);
let pi = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(pi);
pi.enumerable = true;
pi.configurable = true;
pi.writable = true;
Math.floor(pi.value);
console.log(Math.floor(pi.value));
