// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());

console.log(typeof myDate); // output->object

// let myCreateDate = new Date(2025, 2, 23);
// console.log(myCreateDate.toDateString()); // Sun Mar 23 2025

// let myCreateDate = new Date(2025, 2, 23,5,6);
// console.log(myCreateDate.toLocaleString());  // 3/23/2025, 5:06:00 AM

let myCreateDate = new Date("01-14-2023");

// console.log(myCreateDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime()); 
// console.log(Math.floor(Date.now()/1000)); in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getTime());

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})