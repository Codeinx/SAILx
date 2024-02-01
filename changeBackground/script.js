let btn = document.getElementById("mainButton");
function changeBg(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("nbody").style.backgroundColor = '#' + randomColor;
    var myArray = [ "#97009F","#094DB5","#00A300","#DA532C","#AF1A3F","#613CBC", "#008AD2"];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("mainButton").style.backgroundColor = rand;    
}
btn.addEventListener("click", changeBg);
window.onload = changeBg();