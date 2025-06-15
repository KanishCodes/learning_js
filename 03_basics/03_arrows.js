const user = {
    username: "kanish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// this => current context

user.welcomeMessage()

user.username = "sam" // here, we changed the context, current context is now 'sam'
user.welcomeMessage()
// same was printed, because we used the 'this' keyword
// and got the current context
// we didn't hardcode the value 'kanish'

console.log(this) // returns window function if run on browser
// here it runs empty object {}

function chai(){
    let username = "kanish"
    console.log(this.username)
}
chai()

const chaii = function() {
    let username = "kanish"
    console.log(this.username)
}
chaii()

const chaiii = () => {
    let username = "kanish"
    console.log(this.username)
}
chaiii()

/* const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)) */

const addTwo = (num1, num2) => (num1 + num2) // implicit return

console.log(addTwo(3,4))

const myArray = [2, 4, 5, 6]
// myArray.forEach()