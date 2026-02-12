//arithmetic operator

let a = 2;
let b = 5;

// a = a +10;
// a += 10;
// console.log(a);
// a = a-2;
// a -= 2;
// console.log(a);
//console. log(a ** b);

// console.log(10>5);
// console.log(5<=5);
// console.log('5'== 5); // loose equality
// console.log('5'=== 5); // strict equality
console.log('4'!= 5);
console.log('6' !== 5);

// ternary operator
let age = 18;
let statuscheck = (age>18)? 'i can vote':'i cannot vote';
console.log(statuscheck);

// logical operators
// AND && = all t then t, even if one f then f
//  OR || = even one t then t, all f then only f
// NOT !  = !(t)->f , !(f)->t
// let ans = (true && false && true)
// let ans = (false | | false | | false);
let ans = !(false);
console. log(ans);

// Working with non-booleans
// fasly -> undefine,null,0,f,NaN,''
// truly -> anything which is not fasly 
console.log(false || 'rishi');

// short - circuiting
console,log(false || 7 || 11 || 18);

// bitwise operator
// and,or,not,<<,>>,xor
console.log(~(0)); // output= -1 
//bcoz -ve no. first we to convert into 1s compliment then 2s compliment then sign change(bit level flipping krts hai).
console.log(2^2);
// (<<) 5<<1 ans is it will multiply by (num << *2)
// (5<<1)=5*2, (5<<4)=5*2*2*2*2
// (>>) 5>>1 ans is it will multiply by (num >> /2)
// (5>>1)=5/2, (5>>4)=5/2*2*2*2

// Conditionals :- if else, switch, if--else-if--else

let number = 5;

if(number == 1){
    console. log ('A');
}
else if(number == 2) {
    console. log ('B');
}
else if(number == 3) {
    console. log('C');
}
else if(number == 4) {
    console. log( 'D');
}
else if(number == 5) {
    console. log('E');
}
else {
    console. log ('F');
}

// switch case->

let num = 3;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
}
