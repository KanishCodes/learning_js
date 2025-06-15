let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30 // var to aana hi nahi chaahiye
    console.log("INNER: ", a)
}

console.log(a)
// console.log(b)
// console.log(c)

// nested functions
function one(){
    const username = "kanish"

    function two(){
        const website = "github"
        console.log(username)
    }
    // console.log(website) // outside scope

    two()
} 

one()

if(true){
    const username = "kanish"
    if(username === "kanish"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // out of scope
}

// console.log(username) // out of scope

// ******* interesting ********

console.log(addOne(5))
function addOne(num){
    return num + 1
}
// functions can be called before and declared later

// when you put them in a variable, they are called an expression
// you can't call expressions before defining them
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7))

