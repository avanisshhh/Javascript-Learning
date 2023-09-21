var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    };
};
// var avanish= User("Avanish",3);     It is a regular fn call and here in fn "this" is reflecting window or global object.  
// console.log(avanish);

var avanish=new User("Avanish",3); // It uses global object as function object and have some responsiblity..
//console.log(avanish);
avanish.getCourseCount();

var sam=new User("Sam",2);
sam.getCourseCount();
//console.log(sam);

//prototype
User.prototype.getFirstName=function(){      //prototype used for generating a fn of user
    console.log(`your firstname is : ${this.firstName}`);
}

//better code with js
if(avanish.hasOwnProperty("firstName")){//check is the var is there or defined or nt
    avanish.getFirstName();
}