//Code Hoisting

/*
global Context
executive context: 1.variable object   2.scope chain   3.this
Function declarations are scanned and made available L1
Variable declarations are:scanned and made undefined L2
*/


tipper("5"); //IT WORK HERE ALSO bcs of global fn L1
function tipper(a){
//var bill=a;
var bill=parseInt(a);
console.log(bill+5);
}
// tipper("5");


//biggerTipper("200");
var biggerTipper=function(b){  //here it is treated as a variable so will give no o/p L2
    var bill=parseInt(b)
    console.log(bill+20);
}

console.log(name);    //print undefined
var name="Avanish";

function sayMyname()
{ var name="Mr. H"
    console.log(name); //print Mr H
}
sayMyname();
console.log(name); //print Avanish

