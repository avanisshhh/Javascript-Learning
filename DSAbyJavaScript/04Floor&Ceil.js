function ceiling(arr, target) {
  // but what if the target is greater than the greatest number in the array
  if (target > arr[arr.length - 1]) {
    return -1;
  }
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    // find the middle element
    let mid = Math.floor(start + (end - start) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      // ans found
      return mid;
    }
  }
  return start;
}


function floor(arr, target) {
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    // find the middle element
    //            int mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of int in java
    let mid = Math.floor(start + (end - start) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      // ans found
      return mid;
    }
  }
  return end;
}

arr = [2, 3, 5, 9, 14, 16, 18];
target=5
ans1 = ceiling(arr, target);
console.log("Ceiling",ans1);
ans2 = floor(arr, target);
console.log("Floor",ans2);

