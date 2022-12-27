const student={
    name:'John',
    age:22,
    isActive:true,
}
//jsoneditoronline.org
//https://randomuser.me/

//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const stOb=JSON.stringify(student);
console.log(typeof stOb);




//localStorage.setItem('student',stOb);
//Converts a JavaScript Object Notation (JSON) string into an object.
const toJSONst=JSON.parse(stOb);
console.log(typeof toJSONst);

console.log(toJSONst.age);