var age = 1; // this is global varible
if(true){
    console.log(age);
}
//-------------------------------------------------//
function test(){
    var age = 11;
    console.log(age);
}
test();
// reassignment
// redefinition using var but usally not recommnded
//-------------------------------------------------//
let x = 100;
console.log(x); // works fine
//-------------------------------------------------//
{
    let y = 200;
}
console.log(y); // error
//--------------------------------------------------//
{
    let z = 300;
    console.log(z); // works fine - block scope
}
//--------------------------------------------------//
// possible to decleare multiple variables using var
var q = 1;
var q = 2;
//--------------------------------------------------//
// not possible to declare multiple varibles using let
let q = 1;
let q = 2; 
//--------------------------------------------------//
let e = 10;
e = "rishi";
e = true;
e = null;
console.log(e); // dynamic typing in js
//--------------------------------------------------//
const r = 111;
console.log(r); 
r = 222; // error - reassignment not allowed