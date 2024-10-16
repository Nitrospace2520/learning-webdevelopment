/* //* getElementById() :-
const title = document.getElementById("main-heading");
console.log(title);

//* getElementsByClassName() :-
const listItem = document.getElementsByClassName("list-items");
console.log(listItem);

//* getElementsByTagName() :-
const listItems = document.getElementsByTagName("li");
console.log(listItems);

//* querySelector() :-
const ids = document.querySelector("#main-heading");
console.log(ids);
const classNames = document.querySelector(".list-items");
console.log(classNames);
const entityDivs = document.querySelector("div");
console.log(entityDivs);
 */

//* DOM Manipulation :-
// const h1Title = document.querySelector("#main-heading");
// h1Title.style.color = "whitesmoke";

// const classNames = document.querySelectorAll(".list-items");
// // classNames.style.backgroundColor = "darkblue"; //! ERROR
// for (let i = 0; i < classNames.length; i++) {
//   classNames[i].style.fontSize = "5rem";
// }
// console.log(classNames);

//* Creating Elements:-
const ul = document.querySelector("ul");
const li = document.querySelector("li");
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
// ul.append(li);
li.innerText = "The X-MEN";
// li.textContent = "The DC";
// li.innerHTML = "The DU";
