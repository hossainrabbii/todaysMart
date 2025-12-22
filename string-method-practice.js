// 🔹 Level 1 — Basic Access & Info

const { trim } = require("zod");

// Given a string, print the first and last character.

let text = "Hossain";
console.log(text.at(0));
console.log(text.at(-1));

// Check whether the 5th character of a string is "a".
console.log(text.at(4) === "a");

// Count how many characters are in a string without using .length (hint: at() or charAt() loop).
let textLength = 0;
for (let index = 0; index < text.length; index++) {
  textLength += 1;
}
console.log(textLength);

// 🔹 Level 2 — Extracting

// Extract the first 3 characters using two different methods.

console.log(text.slice(0, 3));
console.log(text.substring(0, 3));

// Remove the last 2 characters of a string.

console.log(text.substring(0, -2));

// From "Hello JavaScript", extract only "Java".

console.log("Hello JavaScript".substr(6, 4));

// 🔹 Level 3 — Cleaning & Formatting

// Remove extra spaces from both sides of a string.

console.log("   Gap   ".trim());

// Convert a string into "Title Case" (first letter uppercase, rest lowercase).

const trext = "aap";
console.log(trext[0].toUpperCase().concat(trext.substring(1)));

// Mask a phone number like "01712345678" → "*******5678" using slice().

console.log("01712345678".slice(7).padStart(11, "*"));

// 🔹 Level 4 — Replace & Split

// Replace all "a" with "@".

console.log("Abba".replaceAll(/A/g, "@").replaceAll("a", "@"));

// Split a full name "John Michael Doe" into an array.

console.log("John Michael Doe".split());

// Replace every space with a hyphen (-) without using regex.

console.log("John Michael Doe".replaceAll(" ", "-"));

// 🔹 Level 5 — Combining

// Check if a string contains "js" ignoring case.

// Reverse a string using only string methods + loops (no array methods).

let rev = "Reverse";
let r;
let newRev = "";
for (let index = 0; index < rev.length; index++) {
  let grabLetter = rev.slice(0 + index, index + 1);
  // e
  console.log("grab: ", grabLetter);
  console.log("befor add: ", newRev);
  let rr = newRev.padStart(1, grabLetter);
  console.log("rr: ", rr);
  newRev = rr;
  console.log("newRev: ", newRev);
}
// console.log(newRev)

// Count how many words are in a sentence using split().
console.log("Count how many words are in a sentence using".split(" ").length);
// 🔹 Level 6 — Harder Challenges

// Given " hello world ", convert it to "Hello World" (clean + capitalize both words).

console.log(" hello world ".trim());

// Detect if two strings are anagrams using only string methods.

// Repeat a string until it becomes at least 20 characters long, then cut it to exactly 20.

// Q1

// Convert "hello world" into "HELLO".

console.log("hello world".replace("hello", "HELLO"));

// Q2

// Check if the string "I love JavaScript" contains "java" (case insensitive).

console.log("I love JavaScript".toLowerCase().includes("java"));

// Q3

// Extract "gmail" from "hosenrabbii@gmail.com".

console.log();

// Q4

// Turn " Bangladesh " into "bangladesh"
// (no spaces + lowercase)
console.log(" Bangladesh ".trim().toLowerCase());
// Q5

// Get the last 3 letters of "Programming".

console.log("Programming".slice(0, 3));

// Q6

// Extract "rabbii" from "hosenrabbii@gmail.com".

console.log("hosenrabbii@gmail.com".split("@")[0].slice(-6));

// Q7

// Get everything before the @:

// Input: "hello.world@yahoo.com"
// Output: "hello.world"

console.log("hello.world@yahoo.com".split("@")[0]);

// Q8

// Check if the email ends with "@gmail.com" (case insensitive).
const email = "hosenrabbii@gmail.com";
console.log(email.endsWith("@gmail.com"));

// Q9

// From "JavaScript" make: "script" (last 6 characters)

console.log("JavaScript".slice(-6).toLowerCase());

// Q10

// Replace all "a" with "A" in "banana".

console.log("banana".replaceAll("a", "A"));

// Q11

// Extract "world" from "hello world program"
// —but you cannot use .split().

console.log("hello world program".slice(6, 11));

// Q12

// Count how many "a" characters are in "banana" using a loop + charAt.

let word = "banana";
let countA = 0;

for (let index = 0; index < word.length; index++) {
  if (word.charAt(index) === "a") {
    countA = countA + 1;
  }
}
console.log(countA);

// Q13

// Convert "javascript is fun" → "Javascript Is Fun"
// (title case each word)

const mytext = "javascript is fun";
const textArr = mytext.split(" ");

textArr.map((t) => console.log(t.slice(0, 1).toUpperCase()));

// console.log("javascript is fun".split(" ").map((item)=>{
//     // item.charAt(0).toUpperCase()
// console.log(item)}
// ))

// Q14

// Check if two strings are anagrams:
// Input: "listen" and "silent"
// (You can use: split, sort, join)

// Q15

// Repeat "JS" until the string reaches at least 12 characters,
// then cut it to exactly 12.

let countJS = "JS";
for (let index = 0; index < 12; index++) {
  countJS = countJS.repeat(2);
}
console.log(countJS.slice(0, 12));

// Example output: "JSJSJSJSJSJS"

var countVowels = 0;
let wordToCheck = "javascript";
for (let index = 0; index < wordToCheck.length; index++) {
  let letterPosition = wordToCheck.charAt(index);
  if (
    letterPosition === "a" ||
    letterPosition === "e" ||
    letterPosition === "i" ||
    letterPosition === "o" ||
    letterPosition === "u"
  ) {
    countVowels += 1;
  }
}

console.log(countVowels);

// sentence to check uppercase
let sentenceToCheckUpperCase = "Hello WORld JS ProGRamming";
var countUppercase = 0;

for (let index = 0; index < sentenceToCheckUpperCase.length; index++) {
  let letterPosition = sentenceToCheckUpperCase.charAt(index);
  if (
    letterPosition === letterPosition.toUpperCase() &&
    letterPosition !== letterPosition.toLowerCase()
  ) {
    countUppercase += 1;
  }
}

// console.log(countUppercase);

// Count how many digits (0–9) appear in this string:

let sentenceToChecNumbrCase = "Js99 is 100% fun in 2025!";
var countNumber = 0;

for (let index = 0; index < sentenceToChecNumbrCase.length; index++) {
  let letterPosition = sentenceToChecNumbrCase.charAt(index);
  if (letterPosition >= "0" && letterPosition <= "9") {
    countNumber += 1;
  }
}

// console.log(countNumber);

// Count how many words:

let sentenceToCheckWordrCase = "JavaScript   is   super   fun";
let countWord = 0;
let prev = " ";

for (let index = 0; index < sentenceToCheckWordrCase.length; index++) {
  let char = sentenceToCheckWordrCase.charAt(index);
  // console.log(char, prev)
  if (char !== " " && prev === " ") {
    console.log(char, prev);

    countWord++;
  }
  prev = char;
}
console.log("Word: ", countWord);

// loop

// for (let index = 0; index < "JavaScript".length; index++) {
//   console.log("JavaScript".charAt(index));
// }
// for (let index = 0; index < "JavaScript".length; index++) {
//   console.log("Index", index, "JavaScript".charAt(index));
// }

// for (let index = 0; index < "JavaScript".length; index++) {
//   if (index % 2 === 0) {
//     console.log("Index", index, "JavaScript".charAt(index));
//   }
// }
// let count = 0;

// for (let index = 0; index < "JavaScript".length; index++) {
//   if ("JavaScript".charAt(index).toLowerCase() === "a") {
//     count++;
//   }
// }
// console.log(count);

// let countChar = 0;

// for (let index = 0; index < "JavaScript".length; index++) {
//   countChar++;
// }
// console.log(countChar);

let textToCheck = "HeLLo WorLD";
let countUpper = 0;
let countLower = 0;
for (let index = 0; index < textToCheck.length; index++) {
  if (textToCheck[index] !== " ") {
    if (textToCheck[index].toUpperCase() === textToCheck[index]) {
      console.log(textToCheck[index]);
      countUpper++;
    }
    if (textToCheck[index].toLowerCase() === textToCheck[index]) {
      console.log(textToCheck[index]);
      countLower++;
    }
  }
}

let digitText = "JS101 course 2025";
let countDigit = 0;
let countSpaces = 0;
for (let index = 0; index < digitText.length; index++) {
  if (digitText[index] === " ") {
    countSpaces++;
  }
  if (digitText[index] >= 0 && digitText[index] !== " ") {
    console.log(digitText[index]);
    countDigit++;
  }
}

let specialText = "Hi! JS#1?";
let countSpecial = 0;
for (let index = 0; index < specialText.length; index++) {
  if (specialText[index] !== " ") {
    if (specialText[index].toLowerCase() === specialText[index].toUpperCase()) {
      countSpecial++;
    }
  }
}