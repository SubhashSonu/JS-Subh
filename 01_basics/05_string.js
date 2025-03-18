const name = "subhash"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('subhash-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   subhash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subhash.com/subhash%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('kumar'))

console.log(gameName.split('-'));

// both line of codes are same
// console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
    // "string text line 1
    // string text line 2"
    
    const s1 = "2 + 2"; // creates a string primitive
    const s2 = new String("2 + 2"); // creates a String object
    console.log(eval(s1)); // returns the number 4
    console.log(eval(s2)); // returns the string "2 + 2"
    
    const mood = "Happy! ";

    console.log(`I feel ${mood.repeat(3)}`);
    // Expected output: "I feel Happy! Happy! Happy! "
    