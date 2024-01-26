// let mark = prompt("Enter your score: ")

// if (mark < 40) {
//     console.log("F");
// } else if (mark < 50) {
//     console.log("D");
// }  else if (mark < 60) {
//     console.log("C");
// } else if (mark < 70) {
//     console.log("B");
// } else {
//     console.log("A");
// }

// const score = [39, 20, 48, 76, 90]

// for (let x = 0; x < score.length; x++) {
//     const element = score[x];
    
// }

// let n1 = Number(prompt("Enter your first number: "))
// let n2 = Number(prompt("Enter your second number: "))
// let odd = 0;
// let even = 0;

// for (let i = 1; i <= 10; i++) {
//     // console.log(i);
//     if (i%2 == 1) {
//         odd+=i
//     } else {
//         even+=i
//     }
// } 

// console.log(`evenTotal: ${even}`);
// console.log(`oddTotal: ${odd}`);

// let batchB = ["Tooluth", "Bukola", "Otaiku", "Lizzy", "Isaiah"]

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const name of batchB) {
//     console.log(name);
// }

// let rainy = true
// if (rainy) {
//     console.log("Use your umbrella");
// } else {
//     console.log("Great weather");
// }

// let res = rainy
// ? console.log("Use your umbrella")
// : console.log("Great weather");

let hour = (prompt("Input the Hour of the day (00:00): "))
// let ntime = hour.slice(0,2)
let time = parseInt(hour.split(":")[0])
// console.log(ntime);

function greetings (time) {
    let greet = (time >= 0 && time < 12 || time == 24) ? console.log("Good morning") :
                (time >= 12 && time < 17) ? console.log("Good afternoon") :
                (time >= 17 && time < 24) ? console.log("Good evening") :
                console.log("Wrong input");
}
greetings(time) 
