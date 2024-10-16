//! Searching in String:=
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

//?> indexOf() method
//*> The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// console.log(paragraph.indexOf("dog")); // 40

//?> lastIndexOf() method
//*> The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
// console.log(paragraph.lastIndexOf("dog")); // 52

//?> includes() method
//*> The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
// console.log(paragraph.includes("dog")); // true

//?> startsWith() method
//*> The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// console.log(paragraph.startsWith("The")); // true
// console.log(paragraph.startsWith("Th")); // true
// console.log(paragraph.startsWith("the")); // false
// console.log(paragraph.startsWith("The", 1)); // false
// console.log(paragraph.startsWith("quick", 4)); // true

//?> endsWith() method
//*> The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// console.log(paragraph.endsWith("dog.")); // false
// console.log(paragraph.endsWith("dog")); // false
// console.log(paragraph.endsWith("lazy?")); // true
// console.log(paragraph.endsWith("lazy?", 52)); // false

//?> search() method
//*> The search() method executes a search for a match between a regular expression and this String object and returns the position of the match, or -1 if no match is found.
// console.log(paragraph.search("dog")); // 40
// console.log(paragraph.search(/dOg/i)); // 40

//?> match() method
//*> The match() method retrieves the result of matching a string against a regular expression. and returns an array containing the matched result, or null if there were no matches.
// console.log(paragraph.match("dog")); // [ 'dog', index: 40, input: 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?' ]
// console.log(paragraph.match(/dog/g)); // [ 'dog', 'dog' ]
// console.log(paragraph.match("doggy")); // null

//?> matchAll() method
//*> The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups. returns an iterator of all results matching a string against a regular expression, including capturing groups.
// console.log(paragraph.matchAll(/dog/gi)); // Object [RegExp String Iterator] {}
// console.log([...paragraph.matchAll(/dog/gi)]); // [Array(2), Array(2)]
// console.log(paragraph.matchAll("doggy")); // Object [RegExp String Iterator] {}
// console.log([...paragraph.matchAll(/doggy/gi)]); // []

//?> repeat() method
//*> The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// console.log("abc".repeat(3)); // abcabcabc

//?> replace() method
//*> The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// console.log(paragraph.replace("dog", "monkey")); // The quick brown fox jumps over the lazy monkey. If the dog barked, was it really lazy?
// console.log(paragraph.replace(/dog/g, "monkey")); // The quick brown fox jumps over the lazy monkey. If the monkey barked, was it really lazy?

//?> slice() method
//*> The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// console.log(paragraph.slice(4, 9)); // quick

//?> substring() method
//*> The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// console.log(paragraph.substring(4, 9)); // quick
// console.log(paragraph.substring(9, 4)); // quick
// console.log(paragraph.substring(0)); // The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?
// console.log(paragraph.substring(4)); // quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?
// console.log(paragraph.substring(-4)); // The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?

// String.fromCharCode(65); // A

//! Interview Questions:=
//?> Q1. How to check if a string contains a specific word in JavaScript?
// console.log(paragraph.includes("dog")); // true

//?> Q2. How to check if a string starts with a specific word in JavaScript?
// console.log(paragraph.startsWith("The")); // true

//?> Q3. How to check if a string ends with a specific word in JavaScript?
// console.log(paragraph.endsWith("lazy?")); // true

//?> Q4. How to find the index of a word in a string in JavaScript?
// console.log(paragraph.indexOf("dog")); // 40

//?> Q5. How to find the last index of a word in a string in JavaScript?
// console.log(paragraph.lastIndexOf("dog")); // 52

//?> Q6. How to search for a word in a string in JavaScript?
// console.log(paragraph.search("dog")); // 40

//?> Q7. How to replace a word in a string in JavaScript?
// console.log(paragraph.replace("dog", "monkey")); // The quick brown fox jumps over the lazy monkey. If the dog barked, was it really lazy?

//?> Q8. How to repeat a string in JavaScript?
// console.log("abc".repeat(3)); // abcabcabc

//?> Q9. How to extract a part of a string in JavaScript?
// console.log(paragraph.slice(4, 9)); // quick

//?> Q10. How to extract a part of a string in JavaScript?
// console.log(paragraph.substring(4, 9)); // quick

//?> Q11. How to extract a part of a string in JavaScript?
// console.log(paragraph.substring(9, 4)); // quick

//?> Q12. How to extract a part of a string in JavaScript?
// console.log(paragraph.substring(0)); // The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?

//?> Q13. Anagrams in JavaScript:=
const checkAnagrams = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
// console.log(checkAnagrams("listen", "silent")); // true

//?> Q14. Panagrams In JavaScript:=
const checkPanagrams = (str) => {
  //   return new Set(str.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
  //*  OR
  //   const alphabets = "abcdefghijklmnopqrstuvwxyz";
  //   str = str.toLowerCase();
  //   for (let char of alphabets) {
  //     if (!str.includes(char)) {
  //       return false;
  //     }
  //   }
  //   return true;
  //*  OR
  //   const foundAlphabets = str.toLowerCase().match(/[a-z]/g);
  //   return new Set(foundAlphabets).size === 26;
  //*  OR
  const foundAlphabets = str
    .toLowerCase()
    .split("")
    .filter((char, index) => str.indexOf(char) === index);
  return foundAlphabets.length >= 26;
};
console.log(checkPanagrams("The quick brown fox jumps over the lazy dog")); // true

/* Date: 19 Sept 2024
Multimedia Systems
Project Management and Entrepreneurship
*/
