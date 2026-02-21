// call stack & hoisting --> it make the process were var dec, fun dec are shif to the to top in their scope


// function hoisting
sayMyName("Babbar");
function sayMyName(finalname) {
    console.log(finalName);
}
//  sayMyName("Babbar");


// variable hositing
var age = 25;
console.log(age);
// output - 25
// but 
console.log(age);
var age = 25;
// output - undefine 


// using let const
console.log(age);
let age = 25;
// output - refrenceError same for const

// if we use function expression
hello();
 let hello = function(){
    console.log("hiii")
 }
// output - refrenceError 

// class hoisting -- blue print with instance of object

// class human {

// }
// const object = new human();
// if above class then it will give you refernce error

// function call stack - container - data structures - lifo 
// in function call - it will funtion return also stop then it remove the entry of last pop in stack 

// function - first class citizens
// assign to variable 
// as arugment
// return function
// use function in ds 
// for  as property 

function greetMe(greet, fullName) {
    console. log("hello ", fullName);
    greet();
}
function greet() {
    console. log("Greeting for the day")
}
greetMe(greet, "rishi");


// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console. log(finalAns);
 


// const arr = [
//     function(a,b){
//         return a+b;
//     },
//         function(a,b){
//         return a-b;
//     },
//         function(a,b){
//         return a*b;
//     },
// ];
// let first = arr[0];
// let ans = first(5,10);
// console.log(ans);



let object = {
    age:21,
    wt:80,
    ht:181,
    greet: ()=> {
        console.log("euuu");
    }
}
console.log(object.age);
object.greet();

