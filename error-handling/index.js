// Error Handling - types - compile time-parse, run time

// Compile time error
// Sysntax error
// Console.log(1;      ')'expected
// Runtime error 
// console.log(x); ReferenceError: x is not defined

// handling - gracefully - handle
// try catch-block

try {
    console.log("try block starts here");
    // error -> reference error
    console.log(x);
    console.log("try block ends here");
    // a
    // b
    // c
}

catch(error) {
    // define the error tell what to do
    // retry logic
    // fallback mechanism
    // custom error
    console.log("i am inside catch block")
    console.log("your error is here:",error);
}

// finally block - will run everytime
finally {
    console.log("i will run everytime");
}

// show/propagate/return - use throw 
// let's create a custom error

// try{
//     // reference error
//     console.log(x);
//     let errorCode = 100;
// }
// catch(err){
//     throw new Error ("Bhai phele declare kro, fer print karna");
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invaild Json");
}