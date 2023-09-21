const myStates = ["RAJ",
 "UP", "AP", "UK",1947,"TN", "JK"];

 for(i=0;i<myStates.length;i++){
    if(typeof myStates[i]!="string") break;
    console.log(myStates[i]);
 }
 console.log("////////////");
 for(i=0;i<myStates.length;i++){
    if(typeof myStates[i]!="string") continue;
    console.log(myStates[i]);
 }

//let i=0;
// while(i<myStates.length){
//     console.log(myStates[i]);
//     i++

// }


// let i=20;
// do{

//     console.log(i);
//     i++

// }while(i<10)

 
