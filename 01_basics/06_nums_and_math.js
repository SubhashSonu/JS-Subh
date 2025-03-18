
//number
const score=400
const balance = new Number(100)

// console.log(score)
// console.log(balance);

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2)); //upto to 2 decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //output->123.9 precise value upto 4 number

const hundereds=10000000
// console.log(hundereds.toLocaleString('en-IN')); // in indian 1,00,00,000


//**************maths************//

// console.log(Math);
// console.log(Math.abs(-5));  // output-> 5 gives absolute value
// console.log(Math.round(5.8)); // round off to nearest integer value
// console.log(Math.ceil(4.6)); // gives next integer if it is decimal no.
// console.log(Math.floor(4.6)); // gives same integer removing decimals
// console.log(Math.max(2,4,5,1,0)) //gives max value
// console.log(Math.min(2,4,5,1,0)) //min value

console.log(Math.random());// always gives output between 0 and 1
console.log(Math.floor(Math.random()*10) + 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);