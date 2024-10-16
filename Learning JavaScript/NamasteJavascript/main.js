// // // console.log(this);
// // // console.log(globalThis);
// // // console.log(global);
// // const a = 10;
// // try {
// //   const b = stringToNumber();
// // } catch (error) {
// //   if (error instanceof TypeError) {
// //     console.log("TypeError:", error.message);
// //   } else if (error instanceof RangeError) {
// //     console.log("RangeError:", error.message);
// //   } else if (error instanceof ReferenceError) {
// //     console.log("ReferenceError:", error.message);
// //   } else if (error instanceof SyntaxError) {
// //     console.log("SyntaxError:", error.message);
// //   } else if (error instanceof EvalError) {
// //     console.log("EvalError:", error.message);
// //   } else if (error instanceof URIError) {
// //     console.log("URIError:", error.message);
// //   } else {
// //     console.log("Error:", error.message);
// //   }
// // }
// // function stringToNumber() {
// //   return convertToNumber("abc115454");
// // }

// // function convertToNumber() {
// //   return parseInt("abc115454");
// // }

// // console.log("I am " + name);
// // var name = "Nir";
// // console.log("I am " + name);
// // function getName() {
// //   console.log("I am " + name);
// //   var name = "Nirmalya Dhara";
// //   console.log("i am " + name);
// // }
// // getName();

// // console.log(this);

// // "use strict";
// // add = 10 + 20;
// // console.log(add);

// // "use strict";
// // function add(a, a) {
// //   return a + 50;
// // }

// // console.log(add(10, 20));
// // "use strict"; // this will not work in strict mode return undefined

// function add(a, b) {
//   console.log(this);
//   return a + b;
// }

// // add(10, 20); // global object
// // console.log(this);

// const obj = {
//   name: "Nir",
//   add: add,
//   getName: function () {
//     console.log(this);
//   },
// };

// // obj.add(10, 20); // { name: 'Nir', add: [Function: add] }
// obj.getName(); // { name: 'Nir', add: [Function: add], getName: [Function: getName] }

// function getUser() {
//   let username = "someone";
//   function getName() {
//     let name = "Nir";
//     return name + " " + username;
//   }
//   return getName();
// }
// let email = "elaaro@ji.td";
// getUser();

// console.log(email2);
// let email2 = "264d:c38e:8ccb:4b9a:cc38:b6ee:bc83:875"; // ReferenceError: Cannot access 'email2' before initialization

// let username = "Nir";
// console.log(username); // undefined

// username.radhe(); // typeError\

// var a = 10;
// let b = 20;
// const c = 30;
// {
//   console.log(a); //* 100
//   // console.log(b); //* 200
//   // console.log(c); //* 30
//   var a = 100;
//   let b = 200;
//   const c = 300;
// }
// console.log(a); //* 100
// console.log(b); //* 20
// // console.log(c); //* 30

// function Counter() {
//   let count = 0;
//   this.incrementFunc = function () {
//     count++;
//     return count;
//   };
//   this.decrementFunc = function () {
//     count--;
//     return count;
//   };
// }

// const counter1 = new Counter();
// console.log(counter1.incrementFunc());
// console.log(counter1.incrementFunc());
// console.log(counter1.decrementFunc());

//*> Promise:= Promise is an object which represents eventaual completion or rejection of an asynchronous operation and its resulting value.
// const URL = "https://jsonplaceholder.typicode.com/users";
// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const promise = new Promise((resolve, reject) => {
//   if ("Nir" === "Nir") {
//     setTimeout(() => {
//       resolve("Promise is resolved");
//     }, 3000);
//   } else {
//     reject("Promise is rejected");
//   }
// });

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

const playFootball = () => {
  return new Promise((resolve, reject) => {
    const isWeatherGood = NaN; // false values are undefined, null, 0, false, NaN, ""
    if (isWeatherGood) {
      setTimeout(() => {
        resolve("Football is played");
      }, 3000);
    } else {
      reject("Weather is not good");
    }
  });
};

playFootball()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
