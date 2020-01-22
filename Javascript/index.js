//First, the function
document.querySelector("button").addEventListener("click", function() {

  //Second, setting the numbers
  let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
  let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

  //Third, create random dices
  let rollDice1 = "images/dice" + randomNumber1 + ".png";
  let rollDice2 = "images/dice" + randomNumber2 + ".png";

  //Fourth, Set dices
  document.querySelectorAll("img")[0].setAttribute("src", rollDice1);
  document.querySelector(".img2").src = rollDice2;

  //Fifth, Check who won
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "DRAW!";
  }
});
