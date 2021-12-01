
// JavaScript Dynamic Type ----- 

// Primitive data types

let firstName = "dinesh"

let age = 25

let isFemale = false

let lastname

let trophy = null

const x = Symbol('hey');   //unique value

// Non-primitive types(reference types)

let objec = { car : "BMW" , color: "Red" }

let array = [1,2,3,4,5];

let myName = function success(){
    console.log("logo");
}

//What type of data type find  ----(typeof() ---this method useing )


console.log({firstName},typeof(firstName));

console.log({age},typeof(age));

console.log({isFemale},typeof(isFemale));

console.log({lastname},typeof(lastname));

console.log({trophy},typeof(trophy)); // ----(defult object) this for any datatype change 

console.log({x},typeof(x));

console.log({objec},typeof(objec));

console.log({array},typeof(array));

console.log({myName},typeof(myName));







