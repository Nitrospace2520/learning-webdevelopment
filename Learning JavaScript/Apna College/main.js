/* //? Nothing Important:-
let i = 10;
let j = "100";
console.log(i + +j);
console.log((1).toString() === "1");
console.log(+"42" + 2);
console.log(0.1 + 0.2 === 0.3);
 */
/* //? Dom Manipulation for table example:- */
const selectTable = document.getElementsByTagName("table");
const selectCaption = document.querySelector("caption");
selectCaption.textContent = "TABLE of Row-Columns";
const tableArray = Array.from(document.querySelector("table").children);
const theadFromTableArray = tableArray[1];
theadFromTableArray.innerHTML =
  "<th>&nbsp;</th> <th>Column:1</th> <th>Column:2</th> <th>Column:3</th>";
const firstColumnFromthead = theadFromTableArray.children;
// const theadFirstRowFirstColumn = Array.from(firstColumnFromthead.child);
// console.log(theadFirstRowFirstColumn);
// console.log(firstColumnFromthead);
const rowZeroElements = document.querySelector("thead tr").children;
const zeroRowZeroColumn = rowZeroElements[0];
zeroRowZeroColumn.style.backgroundColor = "darkviolet";
const allRowsAllColumns = document.querySelectorAll("tr");

//* selecting all the rows of thead:
const allRowsOftHead = document.body.children[0].tHead.rows[0].children;
// console.log(allRowsOftHead);
const arrayOfRowsofTHead = Array.from(allRowsOftHead);
// console.log(arrayOfRowsofTHead);
arrayOfRowsofTHead[0].style.backgroundColor = "lightblue";
arrayOfRowsofTHead[1].style.backgroundColor = "skyblue";
arrayOfRowsofTHead[2].style.backgroundColor = "blue";
arrayOfRowsofTHead[3].style.backgroundColor = "darkblue";
//* selecting all the rows of tbody:
const allRowsOftBodies = document.body.children[0].tBodies[0].children; // All rows of tbody
const arrayOfRowsOfTBody = Array.from(allRowsOftBodies);
// console.log(arrayOfRowsOfTBody);
const arrayOf1stRowsOfTBody = Array.from(arrayOfRowsOfTBody[0].children);
const arrayOf2ndRowsOfTBody = Array.from(arrayOfRowsOfTBody[1].children);
const arrayOf3rdRowsOfTBody = Array.from(arrayOfRowsOfTBody[2].children);
arrayOf1stRowsOfTBody[0].style.backgroundColor = "#A8F1F7";
arrayOf1stRowsOfTBody[1].style.backgroundColor = "#12C0CF";
arrayOf1stRowsOfTBody[2].style.backgroundColor = "#0B737D";
arrayOf1stRowsOfTBody[3].style.backgroundColor = "#053135";

arrayOf2ndRowsOfTBody[0].style.backgroundColor = "#BFE6FB";
arrayOf2ndRowsOfTBody[1].style.backgroundColor = "#66C3F4";
arrayOf2ndRowsOfTBody[2].style.backgroundColor = "#15A3EF";
arrayOf2ndRowsOfTBody[3].style.backgroundColor = "#08527A";

arrayOf3rdRowsOfTBody[0].style.backgroundColor = "#F8AB81";
arrayOf3rdRowsOfTBody[1].style.backgroundColor = "#F58A51";
arrayOf3rdRowsOfTBody[2].style.backgroundColor = "#CD500C";
arrayOf3rdRowsOfTBody[3].style.backgroundColor = "#441B04";
