var name="Avanish";  //'v' use single quote only use for single char
//``tick are string  literals

var name='Avanish\'s';
//better to use backticks ``
var name1=`Avanish`;
var fullName=`${name1} kumar`;
console.log(fullName);
console.log(fullName.charAt(0)); //at this pos is A
console.log(fullName.endsWith("r")); //true
console.log(fullName.includes("Ava")); //true
console.log(fullName.toUpperCase()); //AVANISH KUMAR
console.log(fullName.toString(),"999"); //Avanish kumar

