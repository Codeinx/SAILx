let currentNumber = 50
let n = document.getElementById("countdown")
let xcel = setInterval(function () {
    n.textContent = `${currentNumber}`
    currentNumber -= 1
    if (currentNumber <= 0) {
        clearInterval()
        n.textContent = "Welcome"
    } 
}, 1000)
