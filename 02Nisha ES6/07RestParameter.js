   

// function sum(...values){
//     let sum=0;
//     values.map(d=>sum+=d);
//     console.log('Sum',sum);

// }

function sum(...values){
    console.log(Array.isArray(values));

    let sum=0;
    values.map(d=>sum+=d);
    console.log('Sum',sum);

}

function sum2(){
    console.log(Array.isArray(arguments));
    //let sum=0;
    //arguments.map(d=>sum+=d);
    console.log('Sum', sum);

}

// sum(2,3);
// sum2(10,4,6);
// sum(10,4,6,10,30);

function divide(...values){
    //logic here...
}

function calculate(type, ...values) {
    type(...values);
    
}

calculate(sum, 10,20,30);
calculate(sum,10,20);
calculate(divide,10,20);