// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ; to end invoke

// to fix problems caused by pollution of global scope

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('kanish')

 