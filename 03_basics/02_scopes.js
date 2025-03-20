let a = 20  // block scope  a = 20
const b = 20
var c = 30 // global scope

if(true){
   let a = 10  // a = 10  global value of doesnot changes
   const b = 20
   c = 30          // global value is modified after reintialising c
//    console.log("INNER:",a)
}

// console.log("Outer:",a);
// console.log(b);
// console.log(c);


function one(){
    const username = "subhash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}


// one()

if(true){
    const username = "subhash"
    if (username === "subhash"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);

// ++++++++++++ interesting ++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)