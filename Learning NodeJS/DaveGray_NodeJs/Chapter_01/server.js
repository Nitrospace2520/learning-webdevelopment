// console.log(`Hello NodeJS`);
// console.log(global);

// NOTE: 'os' module of nodeJs:-
// const os = require("os");
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.userInfo());
//$ file name and dir name:-
// console.log(__filename);
// console.log(__dirname);

// NOTE: "path" module of nodeJs:-
// const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// NOTE: "math" module of our :-
const { add, substract, multiply, divide } = require("./math");
console.log(add(5, 2));
console.log(substract(5, 2));
console.log(multiply(5, 2));
console.log(divide(5, 2));
