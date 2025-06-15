// for-of loop

// ["", "", ""]
// [{}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps
// an object that holds key-value pairs

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
// only prints unique entries, and in the order we wrote 

for(const [key, value] of map){
    console.log(key, ':-', value)
}

// on objects

// can't iterate like this on objects

// const myobject = {
//    'game1' : 'NFS',
//    'game2' : 'spiderman'
// }

// for(const)