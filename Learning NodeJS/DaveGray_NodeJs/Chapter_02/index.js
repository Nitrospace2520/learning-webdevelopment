// NOTE: File read operation:-
const file = require("fs");
const path = require("path");

///! TODO: Read, Write and Append operations of files 'ASYNCHRONOUSLY' :-
/// REVISIT: the 'readFile()' function will read the file Asynchronously
// const filePathForReading = "./files/stater.txt"; //$ OR
// const filePathForReading = path.dirname(__filename).concat("/files/stater.txt"); //$ OR
const filePathForReading = path.join(__dirname, "files", "stater.txt"); //$ This is the better one
file.readFile(filePathForReading, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log("Reading the file Asynchronously...");
// console.log(filePathForReading);

/// REVISIT: the 'writeFile()' function will write the file Asynchronously
const filePathForWriting = path.join(__dirname, "files", "stater_reply.txt");
const writingData =
  "Yeah! CSE is a nice department not only for Software Engineers but also the common people.\n";
file.writeFile(filePathForWriting, writingData, (err) => {
  if (err) throw err;
  console.log(`The reply is given to the stater.txt`);

  // //! appendFile() :- (callback after callback just to do synchronuously as write >> append >> rename)
  // const filePathForAppending = filePathForWriting;
  // const appendData = "Because this field is the future.\n";
  // file.appendFile(filePathForAppending, appendData, (err) => {
  //   if (err) throw err;
  //   console.log(`Appending to file is completed and Append: 01`);

  //   //! rename() :-
  //   const renamePath = path.join(__dirname, "files", "stater_newReply.txt");
  //   file.rename(filePathForAppending, renamePath, (err) => {
  //     if (err) throw err;
  //     console.log(
  //       `Renaming of this file is completed stater_replay.txt >> stater_newReply.txt`
  //     );
  //   });
  // });
});

/// REVISIT: the 'appendFile()' function will write the file Asynchronously
/// NOTE: As this a aunchronous function therefore if this is run before writeFile() then all its contents will erase and write the wirteFile()'s content
// const filePathForAppending = path.join(__dirname, "files", "stater_reply.txt");
// const appendData =
//   "As all the people or services are shifting online mode as this is less time taken as there are no crowd.\n";
// file.appendFile(filePathForAppending, appendData, (err) => {
//   if (err) throw err;
//   console.log(`The additional reply is given to the stater.txt and Append: 02`);
// });

//* exit on uncaught errors:-
process.on("uncaughtException", (err) => {
  console.error(`There is an uncaught error : \n${err}`);
  process.exit(1);
});

///! TODO: Read, Write and Append operations of files 'SYNCHRONOUSLY' :-
/// REVISIT: the 'readFile()' function will read the file synchronously :-
// const readPath = path.join(__dirname, "files", "stater.txt");
// // const readPath2 = path.join(__dirname, "files", "lorem.txt");
// const readData = file.readFileSync(readPath, "utf8");
// console.log(readData);
// console.log(`Reading the file Sunchronously`);
