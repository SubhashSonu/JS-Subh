/* Javascript Execution Context
  {} -> Global Execution context 
   -> Function Execution context
   -> Eval execution contest


   {} -> Memory creation Phase
      -> Execution Phase

      let val1 = 10 
      let val2 =5
      function addNum(num1, num2){
        let total = num1 +num2
        return total
      }

      let result1 = addNum(val1, val2)
      let result2 = addNum(10, 2)


🔵The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
📝The return value of the 'Function Execution' context is passed to the Global Execution Context
  
  Global Execution Context (GEC) in JavaScript
The Global Execution Context (GEC) is the first execution context created when JavaScript code runs. It acts as the base environment in which all JavaScript code executes.

1. How is GEC Created?
The Global Execution Context is created in two phases:

Phase 1: Memory Allocation (Creation Phase)
JavaScript scans the code and sets up memory for:
Variables → Assigned undefined initially.
Function declarations → Stored entirely in memory.
this keyword → Set to window (in browsers) or global (in Node.js).

Phase 2: Code Execution (Execution Phase)
Variables get assigned actual values.
Functions execute when called.
JavaScript runs code line by line.

2. Example of GEC in Action
javascript

console.log(name);  // undefined (hoisting)
console.log(greet()); // "Hello, World!"

var name = "John";

function greet() {
    return "Hello, World!";
}

console.log(name);  // "John"
Step-by-Step Breakdown:

1.Memory Allocation Phase:

name → undefined
greet → Entire function stored in memory
this → window (in browsers)
2.Execution Phase:

console.log(name); → undefined
console.log(greet()); → "Hello, World!"
name = "John"; → Updates value
console.log(name); → "John"

3. this in the Global Execution Context
In browsers: this refers to the window object.
In Node.js: this refers to the global object.

Example in a Browser
javascript

console.log(this);  // window
console.log(this === window);  // true

Example in Node.js
javascript

console.log(this);  // global
console.log(this === global);  // true

4. Global Execution Context & Call Stack
The Global Execution Context is the first item pushed onto the Call Stack and remains until the program ends.

Example of Call Stack with GEC
javascript

function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
}

first();
second();
console.log("End");

Call Stack Flow:
GEC created → Added to the stack.

first() is called → New Execution Context created → Added to the stack.

console.log("First function") executes → first() finishes → Removed from stack.

second() is called → New Execution Context created → Added to the stack.

console.log("Second function") executes → second() finishes → Removed from stack.

console.log("End") executes.

GEC removed when execution completes.

5. Summary
✅ The Global Execution Context is created first.
✅ It has two phases: Memory Allocation & Execution.
✅ It contains variables, functions, and this.
✅ It remains in the Call Stack until the program finishes.


*/
