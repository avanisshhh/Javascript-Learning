
function binarySearch(arr,target){
     let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        // find the middle element
//            int mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of int in java
        let mid = Math.floor(start + (end - start) / 2);
 //console.log(mid);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            // ans found
            return mid;
        }
    }
    return -1;
}
let arr=[18,-12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
let target=-12;
let ans=binarySearch(arr, target)
console.log(ans);
//console.log(arr[2]);