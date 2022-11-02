document.querySelector("button").addEventListener("click", buttonToss);

function buttonToss() {
  var randomNumber1 = Math.floor(Math.random() * 2) + 1;
  var randomCoinImages = "images/coin" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomCoinImages);

  if (randomNumber1 === 1) {
    document.querySelector("h1").innerHTML = "Heads";
  } else {
    document.querySelector("h1").innerHTML = "Tails";
  }
}
