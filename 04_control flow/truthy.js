const userEmail = "k@kanish.ai"

if(userEmail){
    console.log("Got User Email")
}
else{
    console.log("Don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null,
// undefined, Nan, if arr.length === 0, if Obj.keys(Obj).length === 0

// truthy values
// rest all are truthy values
// some trickym egs. "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??) : null undefined
// to handle null/ undefined values

let val1;
val1 = 5 ?? 10
console.log(val1) // will assign 5, first value

val2 = null ?? 10 // will assign 10, neglecting null

val3 = undefined ?? 10 // will assign 10, neglecting undefined

val4 = nul ?? 10 ?? 20 // will assign 10 again

// ternary operator
const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

