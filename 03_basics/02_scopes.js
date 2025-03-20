let a = 20  // block scope  a = 20
const b = 20
var c = 30 // global scope

if(true){
   let a = 10  // a = 10
   const b = 20
   c = 30
   console.log("INNER:",a)
}

console.log("Outer:",a);
// console.log(b);
// console.log(c);