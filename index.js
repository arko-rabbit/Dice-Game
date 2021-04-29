var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;


var diceRandom1 = "dice" + randomNumber1  + ".png";
var diceRandom2 = "dice" + randomNumber2 + ".png";
var displayImage1 = "images/" + diceRandom1;
var displayImage2 = "images/" + diceRandom2;

var image1 = document.querySelector(".img1").setAttribute("src", displayImage1);
var image2 = document.querySelector(".img2").setAttribute("src",displayImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}

if(randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}