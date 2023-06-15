//53
// var value=Math.max(2,5,4,8,7);
// console.log(value);

 var myObj={};
Object.assign(myObj,{a:1,b:2,c:3},{j:5,l:9,m:11});
//console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA=[6,4]
//console.log(sumOne(6,4));
//console.log(sumOne(myA)); //issue showing undefined

//console.log(sumOne(...myA)); //this will work and this is spread operator


//function sumTwo(...args){
//     console.log(args,"l21");
//     let sum=0;
//     for (const arg of args) {
//         sum+=arg;
        
//     }
//     return sum;
// }
// console.log(sumTwo(6,4,0,8,2),"l29");


//new way
function sumTwo(a,b,...args){
    console.log(args);
    let multi=a*b;
    let sum=0;
    for (const arg of args) {
        sum+=arg;
        
    }
    return [sum,multi];
}
console.log(sumTwo(6,4,1,2,3));
