// console.log(__dirname);
// console.log(__filename);
// console.error(global);
// const args = process.argv;
// console.log(args);

/* const path = require("path");
const fs = require("fs");
fs.readFile(__filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.writeFile(
  path.join(__dirname, "something.txt"),
  "Nothing important and do ctrl+z",
  "utf-8",
  (err) => {
    if (err) throw err;
    console.log("write successfully");
  }
);
 */

const fs = require("fs");
const path = require("path");

const readFileOperation = async () => {
  try {
    // const data = await fs.promises.readFile(
    //   path.join(__dirname, "something.txt"),
    //   "utf-8"
    // );
    // console.log(data);

    const readStream = fs.createReadStream(
      path.join(__dirname, "temporary.txt"),
      { encoding: "utf-8" }
    );
    const writeStream = fs.createWriteStream(
      path.join(__dirname, "new-temporary.txt")
    );

    readStream.on("data", (dataChunk) => writeStream.write(dataChunk));
  } catch (error) {
    console.error(error);
  }
};

// readFileOperation();

// NOTE: Making a new Directory
if (!fs.existsSync(path.join(__dirname, String(new Date().getFullYear())))) {
  fs.mkdir(path.join(__dirname, String(new Date().getFullYear())), (err) => {
    if (err) console.log(er);
    console.log("Directory Created");
  });
}

if (fs.existsSync(path.join(__dirname, String(new Date().getFullYear())))) {
  fs.rmdir(path.join(__dirname, String(new Date().getFullYear())), (err) => {
    if (err) console.log(er);
    console.log("Directory Removed");
  });
}

// process.on("uncaughtException", (err) => {
//   console.log(err);
//   process.exit(1);
// });
