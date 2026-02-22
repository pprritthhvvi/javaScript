// classes - blueprint  -- the data member function, classes, objects 

// class - state, properties, behaviour, functionality

// object create then dot operator

// class human {
//     // properties
//     age; // public can be use outside the class
//     #wt = 80;  // private only be used within the class - make it using #
//     ht = 180;

// // constructor 
//     constructor(newAge, newHeight, newWEight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = val;
//     }


// // behaviour 
//     walking (){
//     console.log("i can walk");
//     }

// // getters and setters // encaps
//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyWeight(val){
//         this.#wt = val;
//     }  
// }

// let obj = new human(30,280,75);
// comsole.log(obj.fetchWeight);
// console.log(obj.age);
// obj.walking;
// console.log(obj.#wt);  // no access
// console.log(this.#wt); // yes access

// default parameter - allow to use function with value

// 1
function sayName(myName = "prithvi"){
    console.log("my name is", myName);
}
sayName(rishi);

// 2
function sayName(fName ="Prithvi", lName = "Sahu") {
    console. log("My Name is: ", fName," ", lName);
}
sayName("rishi");

// 3
function sayName(fName = "rishi", lName = fName.toUpperCase()) {
    console. log("My Name is: ", fName," ", lName);
}
sayName();

// 4 
function solve(value = {age:14,wt:90,ht:190}) {
    console.log("hello",value);
}
solve();

// 5
function solve(value = ["a,b,c"]) {
    console.log(value);
}
solve();

// null, undefine
function solve(value = "Rishi") {
    console. log ("HELLO JII -> ", value);
}
solve(undefined); // output - Rishi , if null then null


// default function parameter
function getAge() {
    return 21;
}
function utility(name = "rishi", age = getAge()) {
    console. log(name, " ", age);
}
utility();