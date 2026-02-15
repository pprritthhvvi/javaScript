// reference type - object,array,function
// type of memory - stack, heap
// object -- collection of key - value pairs

let obj = 
{
    name: "Love",
    age: 25,
    weight: 85,
    height: "6ft 1in",

    greet: function() 
    {
        console. log("hello jee kaise ho saare");
    }
};
console. log(obj)
obj.greet();

// for-in
// from last code to this 
 for (let key in obj){
    console.log(key," ",obj[key]);
 }

// shallow copy - it mean same obj properties show by different pointer
// deep copy

// array - list-contain - collection of item/elements
let arr = new [1,2,3,4,5];

// array constructor
let arr2 = new Array('r',7,true);
console.log(arr2);
console.log(typeof(arr2));

// built-in-methods --> push-insert at end, pop-remove obj, shift-remove first item, unshift-add first item, slice-new part, splic-conext change, filter, redue, sort, indexof, find

brr.push('qwert');
brr.pop(1);
brr.shift('ree');
brr.unshift('qwert yuiop');
brr.push(20);
brr.push(40);
brr.push(70);
// console.log(arr2.slice(2,4) );
brr.splice(1,0,'asdf');
console. log(arr2);

// map
let arr3 = [12,32,43,31];
arr3.map( (num)=>{
    return num*num;
})
console.log(arr3)

let arr4 = [10,20,30];
arr.map((number,index) => {
console.log(number);
console.log(index);
})


// filter
let arr5 = [1,2,3,4,5];
arr.filter((num)=>{
    return num%2 === 0;
    // if(num%2===0){
    //     return true;
    // }
    // else {
    //     return false
    // }
});
console,log(arr5);


let arr6 = [1,2,'asdf', 'ghjkl', null];
let ans = arr.filter((value) => {
    if(typeof(value) == 'number' ) {
        return true;
    }
    else {
        return false;
    }
});
console. log(ans);


// reduce -- acc, curr
let arr7 = [12,6,6]; 
let ans2 = arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(ans2);
//output - total sum-24

//arr.sort();
//console.log(arr.indexOf(9));

// for-each
// for-in -- enumerable propperties of obj
// for-of

let arr8 = [10,20,30];
let length = arr.length;
console.log("length: ",length);
//tradictional loop
for(let index = 0; index < length; index++) {
console.log(arr[index]);
}
arr.forEach((value, index)=>{
console.log("Number: ",value,"Index: ",index);});


// let arr = [10,20,30,40];
// for(let value of arr) {
// console.log(value);
// }

// let fullName ="babbar";
// for(let.val.of. fullName) .{
// console.log(val);
// }

// arrays with functions
 let arr9 = [12,3,4,5,6];
//  function getSum(arr9)
//  {
//     let len = arr8.length;
//     let sum = 0;
//     for(let indexOf=0; indexOf<len; index++)
//     {
//         sum=sum+arr[0];
//     }
//     return sum;
//  }
 function getSum(arr9)
 {
    let sum = 0;
    arr9.forEach(
    (value)=>
    {
    sum=sum+value;
    })
    return sum;
 }

let totalSum = getSum(arr);
console.log(totalSum);

