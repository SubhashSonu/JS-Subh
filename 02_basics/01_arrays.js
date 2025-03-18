// array 

const myArr = [0,1,2,3,4,5];
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4);

// console.log(myArr[0]); print value of index 0
// console.log(myArr2); // print whole Array 

// Array methods

// myArr.push(6); // add 6 to last of myArr
// myArr.pop(); // removes last element
// console.log(myArr); // print whole array

// myArr.unshift(8);  // add in front of array
// myArr.shift(); // removes from front of array

// console.log(myArr);


// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join() // make string
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof newArr) // string


// slice , splice 
// slice does not manipulate original array
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);  
console.log("B ",myArr)

// splice manipulate original array
const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)

// output
/*
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]

original array is modified by using splice 
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]
 */