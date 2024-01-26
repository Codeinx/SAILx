let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let btn = document.getElementById("btn")

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    show()
})

function show() {
    five.textContent = one.value, " ";
    five.textContent += two.value, " ";
    five.textContent += three.value, " ";
    five.textContent += four.value, " ";
} 