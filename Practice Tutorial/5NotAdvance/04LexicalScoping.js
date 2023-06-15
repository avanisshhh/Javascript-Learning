function init() {
    var firstName = "Avanish";
    function sayFirstName() {
        console.log(firstName);

    }
    sayFirstName();
}

init();
console.log(this.firstName); //undefined
