// basic -> for-loop, while, do-while 
// // do find all prg lang
// js has -> for-in, for-each, for-of

// syntax --> for( intialisation__; condition__; updation__ )
//             {
//                    (loop logic)
//             }

for(let i=1; i <= 10; i++) {
    console. log("rishi");
}

// counting
for(let i =1; i <= 5; i++) {
    console. log(i);
}

// reverse counting
for (let i=5; i>0; i--) {
    console.log(i)
}

// break
for(let i=1; i <= 6; i++) {
    if(i == 4) {
        break;
    }
    else {
    console.log(i);
    }
}

// continue
for (let i=1; i<=4; i++)
{
    if (i==3)
        continue;
    else
        console.log(i);
        
}

// while loop
// same as for loop just a simple change
let n = 1;
while(i<=10){
    console.log("rishi");
    i++;
}


// let i =1;
// while(i < 5) {
//     console.log("Inside the loop");
//     if(i == 3) {
//         i++;
//         continue;
//     }
//     else
//         console.log(i);
//     i++;
// }


// do while
let i = 1;
do {
    console.log(i);
    i++;
} while(i<6);

// strings

//let name1="rishi"

// let name1 = `hey prithvi 
// i have q , is it hard to bih
// so yes `

// let name1 = new String("rishi");

console.log(name1);

// operation --> concatenation, substing, lenght, uppercase, lowercase, charAT, indexof

// let op1 = 'English ';
// let op2 = 'Hindi ';
// let ans =op1+op2;
// console. log(ans);

// let op1 = 'English ';
// let op2 = 'Hindi ';
// let finalAns = '${op1}${op2}';
// console. log(finalAns)

// console.log(op1.toUpperCase());

let sentence = "Hello \\jee \\kaise\\ \\ho \\saare";
let words = sentence.split('\\');
console.log(words);
console.log(words.join(','));