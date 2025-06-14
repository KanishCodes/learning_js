// Primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3467169665795895434687469n

// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj =
{
    name: "kanish",
    age: 22,
}
const myFunction = function(){
    console.log("hello world!");
}
console.log(typeof myFunction)
// dynamically typed