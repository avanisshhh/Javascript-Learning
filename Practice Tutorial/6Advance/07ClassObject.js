//import User from "./06classesjs";

const User=require("./06classesjs")

const avanishObj=new User("Avanish","avanish069@gmail.com");

console.log(avanishObj.getInfo()); //will print obj
console.log(avanishObj.getInfo().email); //specific value

avanishObj.enrollCourse("React Bootcamp");
avanishObj.enrollCourse("Angular Bootcamp");
console.log(avanishObj.getCourseList());

let courses=avanishObj.getCourseList();
courses.forEach((c)=>console.log(c)); //values print