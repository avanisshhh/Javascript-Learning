console.log(this);

var user={
    firstName:"Avanish",
    courseCount:5,
    getCourseCount:function(){ //this is fn through an object
        console.log("Line 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10",this);
        }
        sayHello();
    }
}
user.getCourseCount();

//for all regular call of fn this point toward window object