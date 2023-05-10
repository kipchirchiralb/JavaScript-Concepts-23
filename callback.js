function normFunc(num) {
  // num function function scoped(exist only inside this func)
  console.log(num * num); // depends on value passed when calling this func, if none, we get undefined
  //   type coercion in js
  return num * num;
}

// let newNum = normFunc(6)
// console.log(newNum); // 7
// console.log(num); // not defined - num is not initialized

const arrowFunc = () => {
  let str = "abcd";
  console.log(str.charAt(0));
};

// HIGHER ORDER FUNCTIONS

// functions are first class citizens in javascript meaning that they can be used like any other variable

// Higher Order functions are functions that can take in other function as arguments or return a function

function helloOne(str, funcArg) {
  console.log(str);
  funcArg();
  console.log("i am old");
}

helloOne("/route", function newFunc(req, res) {
  console.log("i am new");
});
