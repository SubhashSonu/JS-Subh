function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log( number1 + number2 );
}

// const result=addTwoNumbers(3,4); 
// console.log("Result is:",result);
// if we do above statement then output will be ->Result is: undefined
// it does not store output value 

function addTwoNumbers(number1, number2){
    return ( number1 + number2 );
}
const result=addTwoNumbers(3,4); 
// console.log("Result is:",result); // Result is: 7
// we use return then output will be return where it is called and it can be stored there


function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in` ;
    
}

// console.log(loginUserMessage("Subhash")) // output->Subhash just logged in
// console.log(loginUserMessage())  // if we don't pass anything then output-> undefined just logged in

function calculateCartPrice(...num1){  // ...num1 means rest operator
       return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Subhash",
    price: 199
}

function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))