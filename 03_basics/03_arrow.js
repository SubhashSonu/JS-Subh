const user = {
    username: "subhash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)  // print current context 
    }
}

// user.welcomeMessage()  //subhash , welcome to website
// user.username = "sam" //changes username subhash to sam
// user.welcomeMessage() // sam , welcome to website

// console.log(this) // we are in node environment so it prints ---> {}

// function chai(){
//     let username = "subhash"
//     console.log(this) // we cannot console.log(this.username)  // undefined
// }

// chai()

// const chai = function () {
//     let username = "subhash"
//     console.log(this.username);  // give undefined
// }

// Arrow function
// const chai =  ()=> {
//     let username = "subhash"
//     console.log(this.username);  
// }
// chai()

// basic arrow function
// const addTwo = (num1, num2)=>{
//       return num1 + num2
// }


// Implict return
// const addTwo = (num1, num2) => num1 + num2;  

// const addTwo = (num1, num2) => (num1 + num2) // used in react
const addTwo = (num1, num2) => ({username: "subhash"}) 
console.log(addTwo(3,4))