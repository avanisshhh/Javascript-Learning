//https://www.geeksforgeeks.org/chocolate-distribution-problem/


function findMinDiff(arr,n,m){
    if(n<m){
        return -1;
    }
    if(n==0||m==0){
        return 0;
    }
    arr.sort(function(a,b){return a-b})
    minDiff=Number.MAX_VALUE;
    for(var i=0;i+m-1<n;i++){
      let diff=arr[i+m-1]-arr[i];
      if(diff<minDiff){
        minDiff=diff;
    }
}
return minDiff;
}


let arr = [ 12, 4, 7, 9, 2, 23, 25,
    41, 30, 40, 28, 42, 30,
    44, 48, 43, 50 ];
     
// Number of students
let m = 7;
let n = arr.length;

console.log("Minimum difference is " +
       findMinDiff(arr, n, m));

       console.log("min value:",Number.MAX_VALUE);
       console.log("Max value:",Number.MIN_VALUE);