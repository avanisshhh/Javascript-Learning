//good practice is to use bracket in multi operator calculation
var sellingPrice=199;
var listPrice=799;


var discountPercent;
discountPercent=((listPrice-sellingPrice)/listPrice)*100
console.log("discount price:"+discountPercent);

displayDiscountPrice=Math.round(discountPercent);
console.log("discount price:"+displayDiscountPrice+" %off");


var result= listPrice>sellingPrice;
console.log(result); //true

console.log(typeof result); //type of data type boolean

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence