var randomNumber1=Math.floor(Math.random()*6)+1;

var img1=document.querySelector(".img1")
var imgsrc1="./dice" + randomNumber1 + ".png";
img1.setAttribute("src", imgsrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc2="./dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgsrc2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText="Player1 wins!"
} else {
    document.querySelector("h1").innerText="Player2 wins!"
}