

//fn act like first class citizen in js

function x(fn){
    fn()
}
function y(){
    console.log("Hello from Y");
}
//x(y); //here x is HOF and y is callback fn 


const data=[10,20,5,30];

// const calculate_Square=function(d){
//     const output=[];
//     for (let i = 0; i < d.length; i++) {
//         output.push(d[i]*2);
        
//     }
//     return output;
// }
// const calculate_AddOne=function(d){
//     const output=[];
//     for (let i = 0; i < d.length; i++) {
//         output.push(d[i]+1);
        
//     }
//     return output;
// }



//best approach to write above two fn
function cal_square(x){
    return x*2;
}
function cal_AddOne(y){
    return y+1
}
// const calculate_fn=function(d,calculate){
//     const output=[];
//     for (let i = 0; i < d.length; i++) {
//         output.push(calculate(d[i]));
        
//     }
//     return output;
// }
Array.prototype.calculate_fn=function(calculate){ 
    const output=[];
    for (let i = 0; i < this.length; i++) {
        output.push(calculate(this[i]));
        
    }
    return output;
}


// console.log(calculate_fn(data,cal_AddOne));
// console.log(calculate_fn(data,cal_square));

//we can also do like this ....with map
//console.log(data.map(cal_AddOne));
console.log(data.calculate_fn(cal_AddOne)); //HOF


