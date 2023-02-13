// ARRAY METHODS
let colors = [
  { name: "Patterson" },
  "green",
  "blue",
  "yellow",
  "cyan",
  "black",
  "brown",
];

// console.log(colors[0].charAt(0)); //3

// console.log(colors[0].name);
// console.log(typeof colors[1]);

// console.log(colors[8]);

let students = [
  { name: "albert", age: 36 },
  { name: "brian", age: 22 },
]; // json

// console.log(students[1].age);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// log out number 8 from the matix array
// console.log(matrix[2][1]);

// zero indexed

// 8 in matix
// console.log(matrix[2][1]);
// brian's age
// console.log(students[1].age);

// console.log("1 " + "hshs"); // types coercion

let years = [2015, 2016, 2017, 2018];

// join , toString,  pop, push, shift , unshift, reverses
// console.log(years);
let yearsString = years.join();
// console.log(typeof years);
// console.log(years);
// let reversedYears = years.reverse();
// console.log(years);
// console.log(reversedYears);
let lastElement = years.pop();
console.log(lastElement);
console.log(years);
years.push(2020);
console.log(years);

// assignment -  stay dangerous

// string methods, split, toUpperCase

// reverse a string e.g. cow - woc use split and join methods
