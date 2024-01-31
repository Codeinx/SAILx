let btn = document.getElementById("mainButton");
function changeBg(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("nbody").style.backgroundColor = '#' + randomColor;    
}
btn.addEventListener("click", changeBg);
window.onload = changeBg();