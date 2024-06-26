const { log } = require('console');
const fs = require('fs')
const http = require("http")

//This arguements are a positional, their positions cannot be changed
const callBack = (err, data) => {
    // console.log('Trills');
    // console.log('Err:', err);
    // console.log('Data:', data);
    if (err) {
        // throw err
        console.log(err);
    } else {
        console.log('You are welcome Love');
    }
}
//You can write your callback function outsidde your fs or within it
fs.writeFile('Sample.html', '<h5>Hey</h5>', callBack)
// console.log(fs);
fs.readFile('Sample.html', { encoding: 'utf-8' }, (err, data) => {
    if (err) console.error(err);
    console.log(data);
    //.toString()
})
//The file path here does not exist
//becaue i want my code to throw an error
fs.appendFile('/file/Sample.html', '<h5>Jumanji</h5>', (err, data) => {
    if (err) {
        //This is to make your error show in a different
        // file rather than your console
        fs.appendFile('Sample.txt', err.toString(), () => {
        })
    } else {
        console.log(data);
    }
})

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, {"Content-Type": "text/plain"})
        fs.readFile("Sample.txt", (err, data)=>{
            if (err){
                console.error(err)
                res.end("Something Went Wrong!")
            } else {
                res.end(data.toString());
            }
        })
    }
    res.end("try again")
})

server.listen(5000, ()=> {
    console.log("Server is running on Port 5000");
})