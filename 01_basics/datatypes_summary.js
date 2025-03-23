// Primitive 

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false
// Even though both symbols have the same description, they are unique.

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
/*Reference (Non-Primitive) Data Types (Stored in Heap Memory)
Objects, Arrays, Functions

These store values in heap memory.

The variable holds only a reference (memory address) to the object.

When assigned to a new variable, the reference is copied, not the actual value.
*/


let mychannel="Subh";

let anotherchannel=mychannel;

anotherchannel="Rishabh";

console.log(anotherchannel);
console.log(mychannel);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
};

let usertwo = userone; // Reference copied

usertwo.email = "ram@google.com"; // Modifies the original object

console.log(userone.email); // ram@google.com
console.log(usertwo.email); // ram@google.com
