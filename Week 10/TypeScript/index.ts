// import promptSync from 'prompt-sync';

// const prompt = promptSync();
// const add = (a:number, b:number) => a+b;

// console.log(add(3,2));

// var test: (string|number|boolean)[] = []
// var newElement = test.push("Dominion")
// var newElement = test.push(39)
// var newElement = test.push(true)
// console.log(test);

// function conCat(str1:string, str2:string):string {
//     // var str1 = prompt("Enter first word");
//     // var str2 = prompt("Enter second word");
//     return str1.concat(" ",str2);
// }

// console.log(conCat("Dominion", "Aseyege"));


// function sumOfArray(arr:number[]): number{
//     let y:number = 0;
//     for (let x = 0; x < arr.length; x++) {
//         y += arr[x];
//     }
//     return y
// }
// console.log(sumOfArray([10,20,30,40,50]));

// // let flashSale = [
// //     {item: "hollandia evap", price: 2},
// //     {item: "chivita", price: 5},
// //     {item: "hollandia yoghurt", price: 10},
// //     {item: "Lexus", price: 1500},
// //     {item: "Nexus", price: 1000}
// // ]

// // let cheap = flashSale.filter((q)=>{
// //     return q.price < 1500
// // })

// // let cheap = flashSale.map((k)=>{
// //     return k.item
// // })

// // console.log(flashSale[0].item);

// // let cart = flashSale.reduce((currentTotal, goods)=>{
// //     return currentTotal + goods.price
// // }, 0)

// // console.log(cart);

// interface isCar {
//     oruko: string
//     year: number
//     driving: boolean
//     color?: string
// }

// const car: isCar = {
//     oruko: "Corolla",
//     year: 2022,
//     driving: true
// }

// const temi = (oruko:string): string => {
//     return (`My name is ${oruko}`)
// };
// const sule = (a:number, b : number, c:(param: string) => string) => {
//     let sum = a+b;
//     return c("teni");
// };
// sule(5,10,temi);

// let a: number;
// let b: boolean;
// let c: object;

// let samuel1: (first: number, second: boolean) => number;

// samuel1 = (a: number, b: boolean): number => {
//     return a
// }

// samuel1 = (a: number, b: boolean): number => {
//     return 33
// }

// type myParams = (number | boolean | string | number[]);

// let samuel: (first: number | boolean | string | number[], second: boolean) => number;

// samuel = (a: myParams, b: boolean) : number =>  {
//     return 3;
// }

// let myArr:(string|number|boolean)[];
// myArr = ["Tope", 48, true];
// myArr = [true, true, "Modupe", 200];
// myArr[0] = "Ola";

// let yourArr = [22, "Israel", "Teni", 2024];
// yourArr[3] = 2022

// enum Gender{
//     male = "Male",
//     female = "female"
// }

// interface Person {
//     name: string,
//     age: number,
//     gender: Gender,
//     pronoun: string,
//     religion: string,
// }
// const ganiyu : Person = {
//  name: "Ganiyu",
//  age: 18,
//  gender: Gender.male,
//  pronoun: "she",
//  religion: "Christian"
// }

// function add(n1: number, n2: number, text: string, showResult: boolean) {
//     if (showResult) {
//         return text + (n1 + n2)
//     }
//     if (typeof n1 !== "number" || typeof n2 !== "number" ) {
//         throw new Error ("Wrong Input")
//     }
//     else {
//         return n1 + n2
//     }
// }

// const number1 = 5
// const number2 = 4;
// const showResult = true;
// const text = "Your result is: ";

// console.log(add(number1, number2, text, showResult));


const israel:{
    readonly name: string;
    age: number;
    class?: string
} = {
    name: "Israel",
    age: 4,
}

console.log(israel.name);