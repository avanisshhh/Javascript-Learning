//https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/


var array=[2,4,5,9,10];
function min(arr){
    var min=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            min=arr[i+1];
        }
    }
    return min;
}
function max(arr){
    var max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            max=arr[i+1];
        }
    }
    return max;
}

console.log("minimum array element is :",min(array));
console.log("maximum array element is :",max(array));

