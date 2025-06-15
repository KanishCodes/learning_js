// filter
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
} )
console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums)

// map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) => { return num+10})

// chaining
const newNums = myNumbers
                .map((num) => num*10)
                .map( () => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums)

// reduce

const nums = [1,2,3]
const myTotal = nums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0 )

console.log(myTotal)