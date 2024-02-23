import {Product, addProducts, removeProducts, total} from './model'

let b: Product[] = [];

addProducts(b,  {name: "Rice", price: 300,  quantity: 3});
addProducts(b,  {name: "Spag", price: 500,  quantity: 4});
addProducts(b,  {name: "Iphone 16", price: 10000,  quantity: 1});
addProducts(b,  {name: "Alienware m15", price: 100000,  quantity: 1});
console.log(b);

removeProducts(b, "spag");
console.log(b);

console.log(total(b));