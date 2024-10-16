// console.log("Hello");

//* NOTE: for EC-6 version:- (for this go to package.json file and update "type": "module")
// import { add, substract } from "./mathematics.js";

//* NOTE: for require or old version legacy code:-
// const { add, substract } = require("./mathematics");
// console.log(add(10, 2));
// console.log(substract(10, 2));

// NOTE: For file read and write:-
// const fs = require("fs");
// console.log("Async JavaScript");
// const t1 = performance.now();

// //$ This is a Asynchronous type read
// fs.readFile("text.txt", "utf8", (err, txt) => {
//   if (err) throw err;
//   console.log(txt);
// });
// console.log(`Time taken by the Asynchrounus JavaScript is : `);

// //$ This is a Synchronous type read
// const text = fs.readFileSync("text.txt", "utf8");
// console.log(text);
// console.log(`\nTime taken by the Synchrounus JavaScript is : `);

// const t2 = performance.now();
// console.log(`${t2 - t1}`);

console.log("Hello NodeJS");
//$ TODO: "express" Server code:-
const express = require("express");
const server = express();
server.listen(8080);
