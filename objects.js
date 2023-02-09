const person = {
  name: "John",
  age: 21,
  talk: function () {
    console.log("I can talk");
  },
  isDark: function () {
    return false;
  },
};

const student = Object.create(person);
student.admno = 4563;

console.log(student.isPrototypeOf("person"));
console.log(student.isDark());

// STRING METHODS & PROPERTIES

let carName = "Subaru ,Imprezza ,2007";
let newCar = new String("hello");
console.log(newCar);

console.log(carName.length);
console.log(carName.toUpperCase());
console.log(carName.toLowerCase());

const doc = {
  getElementById: function (id) {
    let element = "Element id: " + id;
    return element;
  },
};
console.log(doc.getElementById("Button").toUpperCase());

console.log(carName.trim());
console.log(carName.split("a"));

let email = "kipcir@eldohu.co.ke";

let username = email.split("@")[0];

let firstLetter = email.charAt(10);

let lastLetter = email.charAt(email.length - 1);

console.log(lastLetter);
// console.log(email.length);

// console.log(username);

//indexing - charAt - - numbers
