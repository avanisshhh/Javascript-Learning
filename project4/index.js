
const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this; //this will hold the ref of current this is ...basically give div prop
  }
  else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();

  }

}
function checkIt() {
  //console.log("checking..");
  if (firstCard.dataset.image === secondCard.dataset.image) { //dataset to check "data-image"
    success();
  }
  else fail();
}
function success() {
  //console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();

}
function fail() {
  //console.log("Failed");
  setTimeout(() => {

    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();

  }, 1000);


}
function reset() {
  isFlipped = false;
  firstCard = null; //reset the value 
  secondCard = null;

}

//TODO: to suffle
(function suffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    //console.log(index);
    card.style.order = index;
  })
})()
// console.log(Math.floor(Math.random())); //just checking the value of random

//github/tc39