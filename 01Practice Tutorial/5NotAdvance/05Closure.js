function init(){
    var firstName="Avanish";
    console.log("i m in it");
    function sayFirstName(){
        console.log(firstName);
        
    }
    return sayFirstName;
}
var value=init();

value(); //this is closure using value 

///////////////////////////////////////////////
function doAddition(x){
    return function(y){
        return x+y;
    }
}
var add5=doAddition(15);
console.log(add5(10));

console.log(doAddition(15)(20)); //also knw as curring
//////////////////////////////////////////////