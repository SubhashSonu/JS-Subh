// Primitive 

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId= Symbol("123")

console.log(id===anotherId);

const bigNumber = 300304805030300n


// Reference (Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // array

let myObj = {
 name: "subh",
 age: 22,  // object
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof bigNumber);


// *****************************************************************

// Stack (Primitive), Heap (Non-primitive)

let mychannel="Subh";

let anotherchannel=mychannel;

anotherchannel="Rishabh";

console.log(anotherchannel);
console.log(mychannel);

let userone={
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo=userone;

usertwo.email="ram@google.com"

console.log(userone.email);
console.log(usertwo.email);