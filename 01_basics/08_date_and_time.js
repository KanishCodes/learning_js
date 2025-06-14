// Dates

let myDate = new Date()

console.log(myDate.toString())

console.log(myDate.toDateString)

console.log(myDate.toLocaleString)

console.log(typeof myDate)

// let mycreatedDate = new Date(2023, 0, 23)
// let mycreatedDate = new Date(2023, 0, 23, 5, 3) // months start from 0 in js
// let mycreatedDate = new Date("2023-01-14")
let mycreatedDate = new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp) // outputs millisecs from 1 Jan, 1970 to now 

console.log(mycreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'IST'
})
