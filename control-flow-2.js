// sequence , selection, looping/iteration

// if statement

console.log(4 > 5);

let condition = false;
if (4 > 5) {
  // run if condition is truthy
  //ignore if condition is falsy - undefined , null, 0,
  console.log("code block executed!!!");
}
let error = "Bad password";
let admin;
if (error) {
  console.log("render error page: Errror Message - " + error);
} else {
  if (admin) {
    console.log("render admin panel");
  } else {
    console.log("render home page");
  }
}

// for loop

for (let i = 0; i < 10; i++) {
  console.log("iteration number " + i);
}

// ++j , j++ (preIncrement and PostIncrention) in js

// let j = 0;
// console.log(j);
// j++; // j = j+1  // j= 1
// j++; // j = j+1  // j=2
// j++; // j = j+1 // j =3
// console.log(j);

// while loop
let x = 0;
while (x < 90) {
  //   console.log("Running " + x);
  x = x + 5;
}
