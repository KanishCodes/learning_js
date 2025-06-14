const name = "kanish"
const repoCount = 34

// console.log(name + repoCount + "value")

// prefer backticks
console.log(`hello! My name is ${name} and my repo count is ${repoCount}`)

// another way to initialize strings
const gameName = new String('kanish-mahajan-hell-yes')

console.log(gameName[4])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newString1 = "       kanish    "
console.log(newString1)
console.log(newString1.trim());

const url = "https://kanish.com/kanish%20mahajan"
console.log(url.replace('%20', '-'))
console.log(url.includes('sus'))

console.log(gameName.split('-'))