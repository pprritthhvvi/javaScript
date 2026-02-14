// functions:- specific task (i/p,o/p)

// Syntax
// function function-name ()
// {
//     (logic)
// }


//1
 function sayMyName() {
    console.log("rishi")
 }
sayMyName();


//2
function printCounting(){
    for(let i=1; i<=100; i++){
        console.log(i);
    }
}
printCounting();


// //3
// function getSum(a,b,c) {
//     let sum = a+b+c;
//     return sum;
// }
// let ans = getSum(1,2,3);
// console.log("print sum", ans);


//4
const getMultiplication = function (a,b){
    return a*b;
}
let ans = getMultiplication(2,10);
console.log(ans);


//5 arrow funtions
let getExpo = (x,y) => 
{
    let ans = x**y;
        return ans;
}
console.log(getExpo(2,8));


