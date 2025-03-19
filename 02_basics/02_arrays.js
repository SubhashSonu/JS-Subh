const marvel_heroes = ["thor", "Ironman","spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]) // flash

// node 02_basics/02_arrays.js

// const allHeroes = marvel_heroes.concat(dc_heroes)  // gives new array 
// console.log(allHeroes)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread out method
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)  // make new array of above with concating all element in above array

// console.log(real_another_array)

console.log(Array.isArray("subhash"))
console.log(Array.from("subhash"))  // make an array
console.log(Array.from({name:"subhash"})) // interesting

let score1 = 100 
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));  // make an array