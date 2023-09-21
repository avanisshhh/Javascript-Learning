//51

//var obj=new Object;
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.
var myMap=new Map(); //


myMap.set(0,"Uno");
//Adds a new element with a specified key and value to the Map. 
//If an element with the same key already exists, the element will be updated.
myMap.set(1,"dos");
myMap.set(2,"tres");
myMap.set(3,"Cuatro");

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

// for(let [key,value] of myMap){
//     console.log(`key is: ${key} and value is ${value}`);
// }

//myMap.forEach((key)=>console.log(`${key}`)); //confusion bcs it give values
//myMap.forEach((value)=>console.log(`${value}`)); //always use value bcs it will value not key


//if u want both try this
myMap.forEach((key,value)=>console.log(`${key}: ${value}`)); //first will print value not key so be careful

myMap.forEach((value,key)=>console.log(`${value} and key is ${key}`));

myMap.delete(2);
console.log(myMap);