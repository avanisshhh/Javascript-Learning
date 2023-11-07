//Given a number n, write a function that returns count of numbers 
//from 1 to n that don’t contain digit 3 in their decimal representation.

 
function numberWithout3(x){
    count=0;
    for (let index = 0; index <= x; index++) {
        if(index.toString().indexOf('3')===-1){
            count++;}
        }
        return count;
    }

//Input
n=13;
var result=numberWithout3(n);
console.log(result);
