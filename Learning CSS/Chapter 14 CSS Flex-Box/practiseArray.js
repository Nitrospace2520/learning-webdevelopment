//? Array to Object in js:-
let array1 = ["Apple", "Google", "Facebook", "Amazon", "Microsoft"];
let object1 = { ...array1 };
// console.log(object1);

//? Fill Array with data:-
let array2 = new Array(7).fill("arrayElement");
// console.log(array2);

//? Remove duplicates from an array:-
let array3 = ["Apple", "Apple", "Google", "Microsoft", "Microsoft", "Google"];
let array4 = Array.from(new Set(array3));
// console.log(array4);

//? Merge arrays:-
let array5 = ["Apple", "Google", "Microsoft"];
let array6 = ["Amazon", "Facebook", "Netflix"];
let array7 = [...array5, ...array6];
// console.log(array7);
