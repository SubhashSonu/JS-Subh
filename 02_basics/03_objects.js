// singleton
//Object.create

//object literals

const mySym = Symbol("key1");
const Jsuser = {
    name: "Subhash",
    "full name": "Subhash Kumar",
    age:20,
    [mySym]: "mykey1",  // to use as a symbol use []
    location: "Jamshedpur",
    email: "subhash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
    }
//node 02_basics/03_objects.js
    // console.log(Jsuser.email)
    // console.log(Jsuser["email"])
    // console.log(Jsuser["full name"])
    // console.log(Jsuser[mySym])

    Jsuser.email = "subhashsonu88@hero.com" // to modify
    // Object.freeze(Jsuser) // prevents objects from modification
    Jsuser.email ="subhashsonu00@micro.com"

    // console.log(Jsuser)

    Jsuser.greeting = function(){
        console.log("Hello JS user");
    }

    Jsuser.greetingTwo = function(){
        console.log(`Hello JS user, ${this.name}`);
    }

    console.log(Jsuser.greeting());
    console.log(Jsuser.greetingTwo());