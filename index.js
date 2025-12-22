// console.log('Hossain is learning basics.')

// // for loop

// console.log('for loop : You use it when you need full control over the loop index (starting point, ending point, step size). ')

// for (let a = 0; a < 5; a++){
//     console.log('for loop: ', a);
// }


// // loop scope: When a variable is declared with let or const inside a loop, it will only be visible within the loop.

// // declare outside of loop

// let i= 5;
// for ( i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log('Here i will change - ', i)

// // inside the loop

// let j = 5;
// for(let j= 0; j<10; j++){
//      console.log(j)
// }
// console.log('Here j will remain same - ', j)


// function test(){

// }

// console.log(test())


// function timer(n){
//     console.log('Start timer')
//     console.log(n)
//     console.log('End timer')
// }

// const car ={
//     name:"Toyota",
//     year:"2015",
//     drive: function (){
//        return "I can drive"
//     }
// }

// console.log(car.drive())

// +++++ question

// JS ======
// shalow copy 
// reduce method
// map method
// map function
// filter method



// var a = [10,11,12]
// function print(b, ...a)
// {
// console.log(a)
// }

// print(9,4,56,7)
//  what will be the output


// const arr = [1,2,3]
// const arr1 = arr.map((ele, index, arr)=> {
//     return ele = 8;
// })
// console.log(arr1) output = [8,8,8]


// convert object into arr
//  ans: onject.entries

// slice vs splice
// find vs filter
// how to merge two objects
// type coercion
// premitive vs non-premitive
// functionality difference between premitive and non-premitive
// what is callback function

// ========================================
// reactjs =====
// ========================================


// useEffect, useLayout, useMemo, useCallback, what is memorization, 
// context API vs redux
// package.json vs package.lock.json 


// ========================================
// HTML =====
// ========================================


// type of list
// div vs span
// meta vs progress
// how can we combine two or more rows
// image map
// required attribute
// difference betweeb em and i tag

// ========================================
// css ====
// ========================================



// css border vs outline
// position properties
//  how we can overlap element with css

// let array = [1,2,3,4]

// const result = array.map((item)=> item > 2);

// console.log(result)



// 1. Variables & Data Types

// Declare a variable name and store your name in it. Print it.
const myName = "Hossain";
console.log(myName);

// Create two numbers and print their sum.

const num1 = 3;
const num2 = 5;
console.log(num1 + num2);

// Create a variable with a boolean value and print it.

const isProgrammer = true;
console.log(isProgrammer);

// 2. Basic Operators

// Write a program to multiply two numbers.

const multiply = 3 * 4;

// Given two numbers, print whether the first is greater than the second.

const x = 5;
const y = 6;

if(x > y){
    console.log("First is greater than.")
}
else{
    console.log("second is greater than.")    
}


// Convert temperature from Celsius to Fahrenheit.


// 3. Conditions (if/else)

// Check if a number is even or odd.

const a = 7;
if(a % 2 === 0){
 console.log("It is even.")
}
else{
    console.log("It is odd.") 
}

// Given someone's age, print whether they are an adult (18+) or not.
let age = 11;

if(age >= 18){
    console.log("Adult")
}

// Check if a number is positive, negative, or zero.

let number = -1;
if(number === 0){
console.log("Zero")
}
else if(number > 0){
console.log("Positive")
}
else{
console.log("negative")
}

// console.log("AmiManushNa".length);
// console.log("AmiManushNa".at(2));
// console.log("AmiManushNa".charAt(2));
// console.log("AmiManushNa".charCodeAt(1));
// console.log("AmiManushNa".codePointAt(1));
// console.log("AmiManushNa".at(-2));
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part)
// console.log("AmiManushNa"[4]);

// let text1= "Ami";
// let text2 = "Hossain";
// console.log(text1.concat(" ",text2).concat(" ", "Valo Manush."))
// console.log("AmiManush".slice(0,10))
// console.log("AmiManush".substring(0,2))
// console.log("AmiManush".substr(0,2))
// console.log("AmiManush".toUpperCase())
// console.log("AmiManush".toLowerCase())
// console.log("AmiManush".isWellFormed()) =>true
// console.log("AmiManush \uD800".isWellFormed()) =>false
// console.log("AmiManush \uFFD0".toWellFormed())
// console.log("   AmiManush ".trim())
// console.log("   AmiManush ".trimStart())
// console.log("   AmiManush ".trimEnd())
// console.log("AVB".padStart(4, 0))
// console.log("AVB".padStart(7, "X"))
// let b = 5;
// console.log(b.toString().padStart(7, "5"))
// console.log(typeof b.toString().padStart(7, "5")) =>string
// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result)

// console.log("Hello World!".replace("World", "Hossain"));
// console.log("Hello World!".replace("WORLD", "Hossain")); // will not work because of case sensative
// console.log("Hello World!".replace(/WORLD/i, "Hossain")); // will work now 
// console.log("Hello World World! World.".replace(/World/g, "Hossain")); // will work now 
// console.log("Hello World World! World.".replaceAll("World", "Hossain")); // will work now 
// console.log("Hello World World! World.".split(" ")); // will work now 
// console.log("Hello World World! World.".split("!")); // will work now 
// console.log("Hello, World World! World.".split(",")); // will work now 

