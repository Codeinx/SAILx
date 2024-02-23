interface Product {
    name: string;
    price: number;
    quantity: number
}

function addProducts(items:Product[], prod: Product){
    return items.push(prod);
}

function removeProducts(items:Product[], prodName: string){
    let index:number = 0;
    for (let x = 0; x < items.length; x++) {
        if((items[x].name.toLowerCase()) === (prodName.toLowerCase())){
            index = x;
            console.log(index)
        }
    }
    return items.splice(index, 1);
}

function total(items:Product[]){
    let y:number = 0;
    for (let x = 0; x < items.length; x++) {
        y += items[x].price;
    }
    return y
}

export {Product, addProducts, removeProducts, total}