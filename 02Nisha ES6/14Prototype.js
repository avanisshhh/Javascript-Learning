//video 1
// let user={
//     name:'Avanish'
// }
//prototype is a powerful ob 
// object.prototype===user._proto_  //true\
//Array.prototype===score.__proto__
//boolean._proto_.__proto__

//null has no prototype and mark as null
//prototype chain until it reaches to null


//video 2 [15]
// function User(name){
//     this.name=name;
//     this.getDetails=function(){
//         console.log(this.name);
//     }
// }

// User.prototype.getDetails=function(name){
//     console.log(this.name);
// }


//let user1=new User('Avanish');
//let user2=new User('Sneha');
// user1.getDetails();
// user2.getDetails();

//user1.getDetails===user2.getDetails //it will give true for prototype or false for inside fn

function user(name){
    
}
user.prototype.name="Alpana"
let user1=new user();
let user2=new user();
user1.name="Avu"; //first it will search the name in object than in prototype
console.log(user1.name);
console.log(user2.name);   
//this approach is not good we need to follow last apporach for common method in order to save memory


//************************************************************** */

let users=['Avu',"Avi","Alps"];
Array.prototype.testMethod=function(){
    console.log("Some random method");
    
}
