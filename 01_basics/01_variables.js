const accountId = 144553
let accountEmail = "kanish@gmail.com"
var accountPassword = "12345"
accountCity = "Amritsar" // can even be declared without using let, but not recommended

let accountState
// accountId = 2 (not allowed, because it's a constant)

// The var keyword is almost the same as let.
// It also declares a variable but in a slightly different, “old-school” way.

// We'll use 'let' from now on!
// 'var' won't be preferred because of issues in block-scope & functional-scope

accountEmail = "kanish456@gmail.com"
accountPassword = "78945"
accountCity = "Bangalore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])