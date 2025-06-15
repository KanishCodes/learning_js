// singleton (formed when made with constructors)
// by Object.create (constructor method)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kanish", // key-value pairs
    "full name": "kanish mahajan",
    age: 19,
    [mySym] : "mykey1", // syntax to access symbols
    location: "Amritsar",
    email: "kanish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // dot method
console.log(JsUser["email"]) // other method to access values

console.log(JsUser["full name"]) // only method to access if keys are strings

console.log(JsUser[mySym])

JsUser.email = "kanish@chatgpt.com" // to modify
console.log(JsUser.email)

// Object.freeze(JsUser) // can't change anything in the object after freezing

// to add functions
JsUser.greeting = function(){
    console.log("hello, js user!");
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello, js user, ${this.name}!`);
}

console.log(JsUser.greetingTwo())
