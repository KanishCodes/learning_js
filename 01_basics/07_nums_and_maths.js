// ********** numbers ***********
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
// sure that its strictly Number

console.log(balance.toString())
// this can help in using all the benefits of strings on this number

console.log(balance.toFixed(3))

const otherNumber = 23.7854
console.log(otherNumber.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-In'))

// *********** maths *************
console.log(Math)

console.log(Math.abs(-6))

console.log(Math.round(4.89))

console.log(Math.ceil(4.2))
console.log(Math.floor(2.4))

console.log(Math.min(4, 9, 3, 1))

console.log(Math.random()) 
// always b/w 0(inclusive) and 1(exclusive) by default

console.log(Math.floor((Math.random()*10)) + 1)
// Math.random() * 10: Scales the random number from the range [0, 1) to [0, 10)
// Math.floor(...): Rounds down the decimal number to the nearest whole number, making the range [0, 9].
// + 1: Shifts the range from [0, 9] to [1, 10]
// Final Output Range: A random integer between 1 and 10, inclusive.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// (max - min + 1): Calculates the total range of values, including both min and max.
// Math.random() * (max - min + 1): Generates a random decimal number between 0 and (max - min + 1).
// Math.floor(...): Rounds the decimal down to the nearest integer, creating a range of integers from 0 to (max - min)
// + min: Offsets the result to start at min, making the range [min, max].
// Final Output Range: A random integer between 10 and 20, inclusive.
// Without +1, the range would exclude the max value. Including +1 ensures the range is fully inclusive from min to max.