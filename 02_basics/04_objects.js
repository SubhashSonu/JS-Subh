// const tinderUser = new Object() // singleton object->Only one instance exists
const tinderUser = {} // non singleton object -> Mutiple independent instances can be created

tinderUser.id = "abc123";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: 'abc123', name: 'John', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "subhash",
            lastname: "kumar"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname); //subhash

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({},obj1,obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}  // spread out
// console.log(obj3);

const users = [  // array of objects
   { 
         id: 1,
         email: "s@gmail.com"
        }, 
   { 
         id: 1,
         email: "s@gmail.com"
        }, 
   { 
         id: 1,
         email: "s@gmail.com"
        }, 
        
]

users[1].email
console.log(tinderUser); // { id: 'abc123', name: 'John', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'abc123', 'John', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', 'abc123' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // check if isLoggedIn is present in tinderuser or not
