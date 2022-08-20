//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let item in person3){
    console.log(item, person3[item])
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name,age){
     this.name = name
     this.age = age
}

// Use an arrow to create the printInfo method
    }

    printInfo() ; {
        return `Name: ${this.name}\nAge: ${this.age}`

    }
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

const addAge = () => {}
    const age = [];
    return (age) => {
        ages.push(age)
    }

const countUp = (() =>{
    let counter = 0;
    return function(){counter++};
})



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreaterThan = (digits) => {
    return new Promise(() => {
        setTimeout((resolve, reject) => {
        if (digits.length >= 10){
            resolve("Big Word")
        }
        else{
            reject("Small Number")
        }
    })
        })
    
}
const result = isGreaterThan(8)
console.log(result)



// Code Wars
const m0ve = (nums) =>{
    for(num in nums);
        if (num => 0);
            return (nums)
}

// Convert a Number to a String!
const number_to_string = (num) => {
    return string (num)
}