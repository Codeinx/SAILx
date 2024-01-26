// let comment3 = 'My name is Dominion Aseyege Majemu-Itura'

// let num1 = 'ADE';

// console.log(num1);
// console.log(comment3);

// let a = ((Math.random()*100)+2).toFixed(0)

// console.log(a);



// let strA = "Ridwan gay Adewale";
// console.log(strA.split(" ") [2]);

// let newString = prompt("Enter your full name: ")
// let val = newString.indexOf(" ")+1
// let result = newString.slice(val)
// console.log(result);

// let num1 = "11"
// let conv = parseInt(num1)
// console.log(typeof num1);
// console.log(typeof conv);

// let fNum = parseInt(prompt("Enter first Number: "))
// let sNum = parseInt(prompt("Enter Second Number: "))
// let fConv = parseInt(fNum)
// let sConv = parseInt(sNum)
// let result = (fNum + sNum)
// console.log(result);

// let n = 10
// let y = n++
// console.log(n);
// console.log(y);

// let areka = {
//     name: "Dj Chicken",
//     occupation: "Eyin Fans Mi",
//     location: "TikTok",
//     ambassador: [1, are, {
//         name: "Big7",
//         occupation: "grammy"
//     }, 99]
// }

// let nums = [45, 32, 90, 56.4, 31]
// console.log(nums.push(99))

// let flashSale = [
//     {item: "hollandia evap", price: 2},
//     {item: "chivita", price: 5},
//     {item: "hollandia yoghurt", price: 10},
//     {item: "Lexus", price: 1500},
//     {item: "Nexus", price: 1000}
// ]

// let cheap = flashSale.filter((q)=>{
//     return q.price < 1500
// })

// let cheap = flashSale.map((k)=>{
//     return k.item
// })

// console.log(flashSale[0].item);

// let cart = flashSale.reduce((currentTotal, goods)=>{
//     return currentTotal + goods.price
// }, 0)

// console.log(cart);

// let count = 1
// for (i = count; i<=10; i++){
//     console.log(i);
// }

// let test = 40
// console.log(test);
// console.log(test.toString());
// console.log(String(test));

// let countries = ["Nigeria", "Uganda", "Kenya", "Gambia", "Mali", "Madagascar", "Ghana"]
// let includesG = countries.filter((a)=>{
//     return a.includes("g")||a.includes("G")
// })
// console.log(includesG);

// let calc = prompt("Enter two number with comma: ")
// console.log(calc);
// let index = calc.indexOf(",")
// let numberOne = calc.slice(0,index)
// console.log(numberOne);
// let numberTwo = calc.slice(index + 1)
// console.log(numberTwo);
// let add = Number(numberOne) + Number(numberTwo)
// console.log(add);

//function expression
// function nameOfFunction() {
//     //expression
//     return
// }

// nameOfFunction(); //function invoked

// ()=> {} // Arrow Function

// //function declaration
// let add = function(){} //anonymous function
// let sub = ()=> {}

// // Immediately Invoked Function Expression - IIFE
// (function newFunction() {
//    // expression
//    return 
// })(newFunction())

// let person = prompt("Enter your name")
// let fName = person.split(" ") [0]

// function greeting(fName) {
//     return `Hey ${fName}, how are you?`
// }

// console.log(greeting(fName));

// sail()

// function fnxn(z) {
//     console.log(`Welcome to SAIL ${z}.`);
// }

// function sail() {
//     let user = prompt("Enter your name").split(" ") [0]
//     fnxn(user)
// }

let dollar = window.prompt("Enter dollar: ")
let value = document.getElementById("naira")

function abokiFX(){
    let change = dollar * 1200
    value.innerHTML = `Your naira equivalent is ${change}`
}

abokiFX()