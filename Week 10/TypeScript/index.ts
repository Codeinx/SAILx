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

const temi = (oruko:string): string => {
    return (`My name is ${oruko}`)
};
const sule = (a:number, b : number, c:(param: string) => string) => {
    let sum = a+b;
    return c("teni");
};
sule(5,10,temi);