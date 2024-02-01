let greet1 = "Hello Damisola"
let greet2 = "Hello Kofoworola"

console.log(greet1);

// for (let i = 0; i < 10; i++) {
//     console.log("Done", i); 
// }

setTimeout(()=> {
    console.log("Async Greet");
}, 1000)

console.log(greet2);