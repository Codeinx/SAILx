// let greet1 = "Hello Damisola"
// let greet2 = "Hello Kofoworola"

// console.log(greet1);

// for (let i = 0; i < 10; i++) {
//     console.log("Done", i); 
// }

// setTimeout(()=> {
//     console.log("Async Greet");
// }, 1000)

// console.log(greet2);

const getRequest = () => {

    const request = new XMLHttpRequest()

request.onreadystatechange

request.addEventListener("readystatechange", ()=> {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.readyState);
        console.log(request.responseText);
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
request.send()

}

getRequest()