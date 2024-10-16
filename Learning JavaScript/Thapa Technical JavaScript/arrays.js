// const numbers = [[1, 2, 3], [4, 5], [6], 7];
// // const nums = numbers.flat();
// Array.prototype.flatArr = function () {
//   //   return this.reduce((acc, val) => acc.concat(val), []);
//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i])) {
//       this.splice(i, 1, ...this[i]);
//       i--;
//     }
//   }
//   return this;
// };

// console.log(numbers.flatArr()); // Output: [1, 2, 3, 4, 5, 6]

// const nums = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6];
// // const uniqueNums = [...new Set(nums)];
// const uniqueNums = nums.filter((item, index) => nums.indexOf(item) === index);
// uniqueNums.sort((item1, item2) => item2 - item1);
// console.log(uniqueNums);

// const users = [
//   { name: "John", age: 34, gender: "male" },
//   { name: "Amy", age: 24, gender: "female" },
//   { name: "Jess", age: 21, gender: "male" },
//   { name: "Tom", age: 36, gender: "male" },
//   { name: "Jane", age: 27, gender: "female" },
// ];
// const usersName = users.map((user) => {
//   if (user.gender === "male") return `Mr. ${user.name}`;
//   return `Ms. ${user.name}`;
// });
// console.log(usersName);
