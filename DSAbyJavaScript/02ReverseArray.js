//https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

var arr= [1, 2, 3, 4, 5, 6];

function reverseArray(arr){
 //temp;
 for(var i=0;i<arr.length/2;i++){
    temp=arr[i];
    arr[i]=arr[arr.length-i-1];
    arr[arr.length-i-1]=temp;
 }
 return arr;

}

console.log("after reverse array element is:",reverseArray(arr));