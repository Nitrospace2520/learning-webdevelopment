/* const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Enter two numbers for Addition : `, (a, b) => {
  console.log(
    "%d + %d = %d",
    Number.parseInt(a),
    Number.parseInt(b),
    Number.parseInt(a + b)
  );
  readline.close();
});
 */

/* const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Hi ${answers.name}!`);
}); */

// command line input in javascript:-
const args = process.argv;

console.log(`Sum of %d and %d is %d`, args[2], args[3], +args[2] + +args[3]);

/**
 * node app.js nir dhara 2520 1729
  D:\node.exe
  D:\Learning Programming\Learning WebDevelopment\Project - 00\Learning NodeJS\CoderDost_NodeJs_Express_MongoDB\
  Chapter 00\app.js
  nir
  dhara
  2520
  1729
 */
