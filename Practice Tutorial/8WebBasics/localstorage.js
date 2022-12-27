// alert("welcome to avi codes")

localStorage.setItem('hero','Thor'); //it is a "key" "value" pair
localStorage.setItem('todo','Buy Chocolates');
var myHero=localStorage.getItem('hero'); //to get the item
console.log(myHero);
console.log(localStorage.getItem('todo'));

//in order to upadate or set item
localStorage.setItem('todoo','Eat Dinner');
console.log(localStorage.getItem('todoo'));

//remove item
localStorage.removeItem('hero');
var myHero=localStorage.getItem('hero');
console.log(myHero);

//in order to clear storage
localStorage.clear();


// conclusion
// setItem
// getItem
// removeItem
// clear

