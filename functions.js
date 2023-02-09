function checkIfEven(x) {
  if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

// checkIfEven(10)
// checkIfEven(5)
// checkIfEven(7)
// checkIfEven(18)
let x = 50;

function addTwoNumbers(num1, num2) {
  console.log(arguments[0]);
  //   console.log(num1 + num2);
}

// addTwoNumbers(2000, 3333);
// addTwoNumbers(30, 3);
addTwoNumbers(10, 33);

// pure functions vs impure functions
// arrow functions //es6 - syntax

const subtractFrom10 = (x, y) => {
  console.log("running");
  return 10 - x - y;
};
subtractFrom10(2, 3);
let result = subtractFrom10(6, 2);
// console.log(result);
