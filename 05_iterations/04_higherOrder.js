// for-in loops

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for( const key in myObject){
    console.log(`${key} shortcur is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(key)
}

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(key)
}

// maps aren't iteratable like this

