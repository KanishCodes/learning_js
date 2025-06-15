// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullname: {
            firstname: "kanish",
            lastname: "mahajan"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname)

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}

const object3 = Object.assign({}, object1, object2) 
// {} => target
// rest of the objects => source
console.log(object3)

// other method, just like in arrays, using the spread operator
const obj4 = {...object1, ...object2}
console.log(obj4)

// when values come from database, they come as array of objects

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    }
]

console.log(users[1].email)
// accessing them like array elements

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "js course",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course
// de-structuring an object
console.log(instructor)


// in react (de-structuring)

const navbar =  ({company}) => {

}

navbar(company = "kanish")

/* {
    "name": "kanish",
    "coursename": "js courses",
    "price": "free"
}
*/

[
    {},
    {},
    {}
]