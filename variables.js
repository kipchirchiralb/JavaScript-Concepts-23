// var, let , const

var user = "brian" // es5 // function scoped

if(true){
    var number = 5
    let letter = "j"
    // console.log(letter) // let and const varables are block scoped
}
// console.log(number) // var variables are function scoped(accessible outside some code blocks but not outside the function it is defined in)


let age = 45 // es6 // block-scoped variables
age  = 46 //re-assigning a variable to a new value

const isTall = false // es6
// isTall = true // TypeError - re-assign a value to a constant variable

console.log(age)

console.log(isTall)

