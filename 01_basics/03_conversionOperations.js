// ****** Type Conversios ******
let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

console.log(valueInNumber)

// "33" => 33
// "33abc" => Nan
// Nan = not a number

let isLoggedIn = 2
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "kanish" => true
// " " => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);

// ****** Operations ******

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " kanish"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
// The binary + is the only operator that supports strings in such a way.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log(true)
console.log(+true)

console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter);
