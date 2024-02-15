"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// const add = (a:number, b:number) => a+b;
// console.log(add(3,2));
// var test: (string|number|boolean)[] = []
// var newElement = test.push("Dominion")
// var newElement = test.push(39)
// var newElement = test.push(true)
// console.log(test);
function conCat(str1, str2) {
    var str1 = prompt("Enter first word");
    var str2 = prompt("Enter second word");
    return str1.concat(" ", str2);
}
