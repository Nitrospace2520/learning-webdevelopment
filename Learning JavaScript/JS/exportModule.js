/* import livingInPresent from "./expriment.js";//* import syntax for default export
import {
  predictingFuture as futureFunc,
  learningFromPast as pastFunc,
} from "./expriment.js";

// livingInPresent();
console.log(livingInPresent());
console.log(futureFunc());
console.log(pastFunc());
***************************************************

import * as Tense from "./expriment.js"; //* Another way of importing in JS
import User from "./expriment2.js";
import { LaptopBrand as LaptopSpecification } from "./expriment2.js";

// console.log(Tense.learningFromPast());
// console.log(Tense.default());
// console.log(Tense.predictingFuture());

const user = new User("n.dhara.20@gmail.com", 965721);
// console.log(user.show());

const laptop = new LaptopSpecification(
  "Acer",
  "Aspire-7",
  "intel core i5 10 gen"
);
console.log(laptop.getSpecificatons());
*/
/* //! Higher Order Functions:- (Functions as Arguments of another functions or Functions as return of another functions)
import { posts } from "./posts.js";

// for (let index = 0; index < 10; index++) {
//   console.log(`${posts[index]["id"]} : ${posts[index]["title"]}`);
// }
// posts.forEach((post) => console.log(post));

const filteredPosts = posts.filter((post) => post["userId"] === 10);
// filteredPosts.forEach((post) => console.log(post));

// const mappedPosts = posts.map((post) => post["userId"] >= 9);
// mappedPosts.forEach((post) => console.log(post));
const mapFilteredPosts = filteredPosts.map((post) => post.id * 2);
console.log(mapFilteredPosts); */

//! random expriment:-
// function randomFunc1() {
//   console.log(this);
// }
// const randomFunc1 = () => {
//   console.log(this); //* {}
// };
// randomFunc1();
// console.log(this);

// const randomFunc2 = () => {
//   return { username: "Radhe" };
// };    //! OR
// const randomFunc2 = () => ({ username: "Radhe" });
// console.log(randomFunc2());
//? Immediatly Invoked Function Expressions (IIFE):-
// (function randomFunc3() { //* it's a Named IIFE for randomFunc3 name
//   console.log(`Connected to DataBase`);
// })();
// (() => {
//   console.log(`You are now on Moon`);
// })();
// ((username, password) => {
//   if (username === "Bruce Wayne" && password === 1729)
//     console.log(`${username}, you successfully logged in`);
// })("Bruce Wayne", 0.1729);

//? flasely values for if: false, 0, -0, BigInt: 0n, "", null, undefined, NaN
//? truety values for if: 'false', "0", " ", function(){}, {}, [], etc...
// let choice = 131;
// switch (choice) {
//   default:
//     console.log("default");
//     break;
//   case 11 | 131:
//     console.log("11|131");
//     break;
//   case 12:
//     console.log("12");
//   // break;
// }

//? Nullish Coalescing Operator ?? (It will select the value which is not null or undefined)
// let val;
// // val = 5 ?? 10;  //* 5
// // val = null ?? 20;  //* 20
// // val = undefined ?? null ?? 30; //* 30
// val = undefined ?? 40 ?? 50; //* 40
// console.log(val);

// const arr = ["Bruce", "Clerk", "Diana", "Barry"];
// arr[10] = "Shasha";
// // arr.forEach((ele) => console.log(ele));
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// const url = "https://imdb-top-100-movies.p.rapidapi.com/";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "64f84aa7ffmsh93d8e7988e33b3fp1fcee9jsn63b646a516a8",
//     "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
//   },
// };
// const top100Movies = async (url, options) => {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // console.log(result);
//     result.forEach((element) => {
//       console.log(element);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
// top100Movies(url, options);

/* //TODO: Create a circle when user click on the webpage:-
document.querySelector("body").addEventListener("click", (event) => {
  // console.log(event);
  const div = document.createElement("div");
  div.style = `background-color: #00c; border-radius: 100px; border: 2px double #005; width: clamp(50px, 10vh, 100px); height: clamp(50px, 10vh, 100px)`;
  div.style.position = "absolute";
  div.style.top = `${event.y}px`;
  div.style.left = `${event.x}px`;
  div.style.transform = `translate(-50%, -50%)`;
  const time = new Date(event.timeStamp * 1000).toLocaleString("en-US");

  console.log(time);
  event.target.append(div);
}); */
/* 
console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
console.log("4");
console.log("5"); */

//? Async JavaScript:-
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  // let count = 0;
  // setInterval(() => {
  //   body.style = `background: url(https://source.unsplash.com/random/200x200?sig=1) no-repeat; background-size: cover`;
  //   console.log(count + 1);
  //   count = (count + 1) % 7;
  // }, 1000);
});
