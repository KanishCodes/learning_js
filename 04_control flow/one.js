// if
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("yes")
}

/* if(2 == "2"){
    console.log("executed")
}*/

if(2 === "2"){ // strict equal
    console.log("executed")
}

// <, >, <=, >=, ==, !=, ===, !==

// else
const temperature = 41
if(temperature < 50){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temperature is not less than 50")
}

const score = 200
if( score > 100){
    const power = 'fly'
    // if we use var instead of const, it would've made its scope global, which we don't want
    console.log(`User Power: ${power}`)
}

// console.log(`User Power: ${power}`) out of scope

const balance = 1000
if(balance < 500) console.log("test")

// nesting

if(balance < 500){
    console.log("less than")
}
else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log("less than 1000")
}

// logical operators
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ){
    console.log("allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In")
}


