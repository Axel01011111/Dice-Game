//First, the two random numbers
let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

//Second, select a random dice
let rollDice1 = "images/dice" + randomNumber1 + ".png";
let rollDice2 = "images/dice" + randomNumber2 + ".png";

//Third, press play and set them
document.querySelector("button").addEventListener("click", rollEmGood);


function rollEmGood() {
  //Set dices
  document.querySelectorAll("img")[0].setAttribute("src", rollDice1);
  document.querySelector(".img2").src = rollDice2;


  //Check who won
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "DRAW!";
  }

}
