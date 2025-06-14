const myArr = [0, 1, 2, 3, 4, 5, true, "kanish"]
const fruits = ["berry", "apples"]

console.log(myArr[2])

myArr.push(6)
myArr.pop(6)
console.log(myArr)

myArr.unshift(9)
// myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))

console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)

console.log(typeof newArr)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)

// slice()
// Extracts a section of an array and returns it as a new array,
// without modifying the original array.

// splice()
// Adds or removes elements from an array,
// modifying the original array.
