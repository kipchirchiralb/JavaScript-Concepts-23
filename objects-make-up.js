const animal = {
  kingdom: "Animalia",
  class: "",
  legs: 4,
  layEggs: null,
  communicate: function (way) {
    console.log("This animal " + way);
  },
};
let dog = Object.create(animal);

// console.log(dog.communicate("Barks"));
dog.class = "mammal";
dog.layEggs = false;

// console.log(typeof dog);
// console.log(typeof dog.toString());

// console.log(animal.hasOwnProperty("kingdom"));

let myName = "ALbert"; //initializing a string
myName.length;
// strign Methods
console.log(name.toUpperCase());
console.log(name.split("b"));

let numbers = [1, 2, 8, 6, 8, 9, 3, 5, 1, 3, 2];
numbers.push("Hello");
console.log(numbers.length);
