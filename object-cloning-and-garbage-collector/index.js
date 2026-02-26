// Dynamic nature - object
// object cloning - we have 3 ways 

// 1)spread operator
// 2)assing operator
// 3)iteration operator

let src = {
    name:rishi,
    age:21
};

let dest = {};
//cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = scr[key];
    // insert newKey and value in dest and create a clone
    dest[newKey]=newValue;
}


let src2 = {
    value:101,
}
// let dest ={...src};
let dest = Object.assign({}, src, src2);
// let dest = src;
src.age = 22;
console.log("src:",src);
console.log("dest:",dest);

// assign operator dist = object.assing ({},src)
let dest = Object.assign({}, src);


// let object = {
//     age:12,
//     wt:68,
//     ht:180,
// };
// console.log(obj)
// obj.color = "white";
// console.log(obj)


// garbage collector - for js, we have no control upon this, runs in background
// as per memory assign this need to be deallocted manually to free/delete and solve thr memory leaks


