// if 
const isUserloggedIn = true;
const temperature = 41;

// if(temperature < 50){
//       console.log("less than 50");
// }

// else {
//     console.log("temperature is greater than 50");
// }
// <, >, <=, >=, ==, !=, === (will also check type of with equality), 

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // not defined since power is block scope/ out of scope


const balance = 1000;

// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 950){
//     console.log("less than 900");
// }
// else console.log("less than 1200");


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}