// Immediately Invoked Function Expression (IIFE)

// we use IIFE to remove global scope pollution related problem
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// unnamed IIFE
// (()=>{
//     console.log(`DB CONNECTED TWO`)
// })();


((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("subhash");

