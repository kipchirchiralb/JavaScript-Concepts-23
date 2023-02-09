// string, number, boolean, undefined, null, symbol, object

// primitive/value  data types

let newstring = 'This is "brand" new item'; // string- takes in any character enclosed in quotes

let isLogged = false; // Boolean(can either be true or false)

let rate = 12.5; // Number data type which can take both whole numbers and decimals

let count; // undefined

// console.log(color) // not defined

// console.log(count); // undefined

// let color = null; // null

// console.log(color); // null

// symbols + - * / > = === ==

// references data types - objects & arrays , linked lists, stack, hash maps

// object
let cup = {
  color: "green",
  hasHandle: true,
  sizes: [1, 2, 3],
};

// console.log(cup.color);
// console.log(cup.hasHandle);

// array
let colors = ["black", "white", "green", 2, false, true];
// console.log(colors);

//  passing by value vs passing by reference
// variables and data types in js

// console.log(typeof newstring);

let person = {
  name: "John",
  age: 21,
  isKenyan: true,
  "Date of Birth": "17th June",
  scream: function () {
    console.log("uuuiiiiiiiiiii!!!!");
  },
  doc: {
    author: "albert",
    func: () => {
      console.log("alot to learm");
    },
  },
};

// console.log(person.scream()); //method
console.log(person.doc.func()); //nested object

// let numbers = [1,2,3,[70,97]]

// console.log(typeof person.name) // dot notation //String
// console.log(typeof person["Date of Birth"]) // bracket notation
// console.log(typeof person.isKenyan) //Boolean
