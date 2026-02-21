// variable scoping - global, function, block {var,let,const}

// global

// let age = 25;
// const age = 25;
var age = 25;
console.log(age);
{
    console.log(age)
}
if(true){
    console.log(age)
}
for(let i=0; i<2; i++){
    console.log(age);
}
function sayhi(){
    console.log("hi",age);
}
sayhi();

// function

function sayhii(){
  //const,let  var fullName = "Prithvi";
    console.log("hii",name);
}
sayhii();

// temporal dead zone
console.log(marks);
const marks = 100;
console.log(marks);
