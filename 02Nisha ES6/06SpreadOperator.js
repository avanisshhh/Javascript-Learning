//what is spread op
const user = ["user1", "user2"];
//console.log(user);
//console.log(...user); //spread operator
//In Array
const team1 = ["user1", "user2"];
const team2 = ["user3"];
const newTeam = team1.concat(team2);
//console.log(newTeam);

//es6 with spread op
const myTeam = [...team1, ...team2];
//console.log(myTeam);

const productList1 = ["phone", "adaptor"];
const newProduct = [...productList1];
//with using spread operator only new array is changed and the old one bt in normal arr both arr will
//be affected

// console.log(productList1);
// console.log(newProduct);

// newProduct.push("Camera");
// console.log(productList1);
// console.log(newProduct);

//spread in ob
// console.log("spread op in object");
// const emp = { name: "john", job: "developer" };
// const personalDetails={age:'20'};
// const clonedEmployee = { ...emp };
// console.log(emp);
// console.log(clonedEmployee);
// const employeeDetails={...emp, ...personalDetails}; //{ name: 'john', job: 'developer', age: '20' }
// console.log(employeeDetails);


//spread op in fn 

//console.log(Math.min(10,5,30,3,90));
const scoreList=[100,40,34,89];
//console.log(Math.max(...scoreList)); //normal arr will not work


//immutability with spread op

const todos=[
    {task:'reading',completed:'true'},
    {task:'painting', completed:'false'}
];

function addToDo(newToDo){
    // todos.push(newToDo);
    return[ ...todos,{...newToDo}]
}

const newList=addToDo({task:'recording',completed:'false'});
console.log(todos);
console.log(newList);  //use of spread here is it will not affect the original object



