// regex provide a way to search, replace, and extract content in text

// creating a regexp in js

//1. using RegExp constructor
const regex1 = new RegExp("bcd");
//2. Using literal syntax between slashes /pattern/
const regex2 = /abcd/;

// testing for matches

// using test() method which returns a boolean

const str = "wwabcdegdhdh";
const str2 = "wwaBcdegdhdh";
const str1 = "bcd";
console.log(regex2.test(str)); // true -- abcd appears in str
console.log(regex2.test(str1)); // false abcd does not apppear anywhere in str1
console.log(regex2.test(str2)); // false -- REGEX are case sensitive

// Matching and Extracting -- match() method -  returns an array of matches or null if there are no matches.

const regex3 = /co/;
const str4 = "Hello, world! i love code";

console.log(str4.match(regex3)); // Output: ["lo",'lo']

// Replacing Matches - replace() method
const regex4 = /world/;
const str5 = "Hello, world!";

const newStr = str5.replace(regex4, "JavaScript");
console.log(newStr); // Output: "Hello, JavaScript!"

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("john@example.com")); // Output: true
console.log(validateEmail("invalid.email")); // Output: false
console.log(validateEmail("user@domain.co.uk")); // Output: true
console.log(validateEmail("hello@world")); // Output: false
