// for

for(let i = 0; i < 11; i++){
    if(i == 5){
        console.log("5 is the the best number")
    }
    console.log(i)
}

// nested loops
/* for(let i = 0; i<= 10; i++){
    console.log(i)
    for(let j = 0; j <= 10; j++){
        console.log(i, j)
    }
} */

let arr = ["flash","batman","superman"]
for(let index = 0; index < arr.length; index++){
    const element = arr[index]
    console.log(element)
}

// break and continue

for( let i = 0; i < 10; i++){
    console.log(i)
    if(i==8){
        console.log("detected 8")
        break;
    }
}

for( let i = 0; i < 10; i++){
    console.log(i)
    if(i==8){
        console.log("detected 8")
        continue;
    }
}