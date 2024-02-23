"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.total = exports.removeProducts = exports.addProducts = void 0;
function addProducts(items, prod) {
    return items.push(prod);
}
exports.addProducts = addProducts;
function removeProducts(items, prodName) {
    let index = 0;
    for (let x = 0; x < items.length; x++) {
        if ((items[x].name.toLowerCase()) === (prodName.toLowerCase())) {
            index = x;
            console.log(index);
        }
    }
    return items.splice(index, 1);
}
exports.removeProducts = removeProducts;
function total(items) {
    let y = 0;
    for (let x = 0; x < items.length; x++) {
        y += items[x].price;
    }
    return y;
}
exports.total = total;
