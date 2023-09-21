//52

const user=["Avanish",22,"admin"];
// var role=user[2];
// var name=user[0];

//better way to call object via var is
//var[name,courseCount,role]=user;
//console.log(role);

const myUser={
    name:"Avanish",
    courseCount:"5",
    role:"admin",
};
//console.log(myUser.courseCount); //not a good idea try this..
const {name,courseCount,role}=myUser; //name shouled be same as defined in object
console.log(courseCount);