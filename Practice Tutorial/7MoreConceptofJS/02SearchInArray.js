const myToDo=[
    {
        title:"Buy Bread",
        isdone:false
    },

    {
        title:"Learn Market",
        isdone:false
    },
    {
        title:"Go to gym",
        isdone:true
    },
  
]

// const index=myToDo.findIndex(function(todo){
//     // console.log(todo);
//     return todo.title=="Go to gym";
// })

// console.log(index);


const findTodo=function(anymyToDo,title){
    const index=anymyToDo.findIndex(function(todo,index){
  return todo.title.toLowerCase()===title.toLowerCase();
    })
    //return anymyToDo[index];
    return index;
}
let printMe=findTodo(myToDo,'Go to gym');
console.log(printMe);


// const findTodo=function(myTodo,title){
//     const titleReturned=myTodo.find(function(todo){
//         return todo.title.toLowerCase()===title.toLowerCase();

//     })
//     return titleReturned;
// }

// let printMe=findTodo(myToDo,'Go to gym');
// console.log(printMe);