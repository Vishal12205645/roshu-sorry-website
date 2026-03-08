const noButton = document.getElementById("noButton");

if(noButton){

noButton.addEventListener("mouseover", function(){

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;

noButton.style.left = x + "px";
noButton.style.top = y + "px";

});

}

function goToLove(){
window.location.href="love.html";
}