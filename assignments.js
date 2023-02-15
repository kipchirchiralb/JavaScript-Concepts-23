// Write a function to print all even numbers greater than 30 and below 50

function evenNumbers(x, y) {
  x = x + 1;
  for (let i = x; i < y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// evenNumbers(100, 1000);

// for(let i = 32; i<50; i+=2){
//     console.log(i);
// }

// Write a program that uses prompt() to ask the user for their name and age, and then uses alert() to display a message to the user.(BROWSER)
if (90 > 100) {
  let userName = prompt("Enter your name");
  let userAge = prompt("Enter your age");
  alert("Hi " + userName + ". You're " + userAge + " years old.");
  alert(`Hi ${userName}. You're ${userAge} years old`); // template literal
}

// Write a function that takes two numbers as arguments and returns the sum of the numbers. Then, call the function and print the result.

function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// console.log(addTwoNumbers(100, 22));

// Write a program that defines an object that represents a person, with properties for name, age, and city. Then, use dot notation to access and print the values of the object's properties.
const person = {
  name: "Albert",
  age: 36,
  city: "Eldoret",
  "went to": "JKUAT",
};
// console.log(person.name); // albert
// console.log(person["went to"]); // jkuat
// console.log(Object.values(person));
// console.log(Object.keys(person)[0]);
// console.log(person.name, person.age, person.city, person["went to"]);

// Write a function that takes an array of numbers as an argument and returns the sum of the numbers in the array. Then, call the function and print the result to the console. //reduce() array method
