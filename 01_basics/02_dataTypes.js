// We can put any type in a variable.
// Programming languages that allow such things, such as JavaScript,
//  are called “dynamically typed”, 
// meaning that there exist data types, but variables are not bound to any of them.

"use strict"; // treat all JS code as newer version

// alert(3+3)
// we are using node.js, not browser

console.log(3 + 3)

let name = "kanish" // string
let age = 19 // int
let isLoggedIn = false // boolean

// The number type represents both integer and floating point numbers.

// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// BigInt type was recently added to the language to represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer:

// A string in JavaScript must be surrounded by quotes.

// The boolean type has only two values: true and false.

// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).
// The symbol type is used to create unique identifiers for objects. 
// In contrast, objects are used to store collections of data and more complex entities.

console.log(typeof "kanish")
console.log(typeof age)
console.log(typeof null) // null is considered an object
console.log(typeof undefined)