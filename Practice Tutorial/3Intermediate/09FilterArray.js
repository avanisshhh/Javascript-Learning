var testArray=[12,4,6,8,10,18];
//console.log(testArray.fill("h"));
//console.log(testArray.fill("h",2)); // from start of second element it will replace the all element 
                                    
//console.log(testArray.fill("h",2,5)); ////end range  is exclusive




const myNumber=[23,23,25,55,66,77,87,98];
const result=myNumber.filter((num)=>num!=55);
//console.log(result);


   

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users.slice(2,4)); //starting range is inclusive and exclusive [ 'Ton', 'Sam' ]
//console.log(users.slice(2)); //from element 2 left will remove and print nxt remaining ele [ 'Ton', 'Sam', 'Sor', 'Sod' ]


//users.splice(1,3,"Hi"); // here 1 is starting and 3 is count here
users.splice(1,3,"Hi","Vii") //[ 'Ted', 'Hi', 'Vii', 'Sor', 'Sod' ]
//console.log(users);

