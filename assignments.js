// Write a function to print all even numbers greater than 30 and below 50

function evenNumbers(x, y) {
  x = x + 1;
  for (let i = x; i < y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evenNumbers(100, 1000);

// for(let i = 32; i<50; i+=2){
//     console.log(i);
// }
