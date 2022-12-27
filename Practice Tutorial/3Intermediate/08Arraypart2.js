function isEven(element) {
    // if (element % 2 === 0) { return true; }
    // else return false;


    return element%2===0 //replace above code by single line

}
//console.log(isEven(21));

var isEven1= function(element) 
//var isEven1=(element)  functionality is same as above line code

{
    // if (element % 2 === 0) { return true; }
    // else return false;
    return element%2===0 //replace above code by single line

}
//console.log(isEven1(5));


var isEven2= (element)=>{ //arrow fn
    return element%2===0;
}
//console.log(isEven2(4));


var result=[2,4,6,8].every(isEven2) //return true when all val are satisfied
//console.log(result);

var result=[2,4,6,8].every((e)=>{return e%2===0}) //use of curly need return fn 
var result=[2,4,6,8].every((e)=>(e%2===0))     //here there is no need of return 
console.log(result);


