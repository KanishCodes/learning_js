/* function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
} */

// when you define a function, (num1, num2) are called parameters

// when you call a function, (3, 4) are called arguments


function addTwoNumbers(num1, num2){
    // let result = console.log(num1 + num2)
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
addTwoNumbers("3", 4)
addTwoNumbers(3, "a")

console.log("Result: ", result) // undefined

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in!`
}

console.log(loginUserMessage("kanish"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 300))

// functions with objects
const user = {
    username: "kanish",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username0} and price is ${anyObject.price}`)
}

handleObject(user)

// functions with arrays
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))