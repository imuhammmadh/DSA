function FindLargestElOptimal(arr) {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(FindLargestElBetter([1, 3, 5, 4, 6, 7, 8]));

let arr = [1, 2, 3, 4]
function sLargest(a) {
    let largest = a[0];
    let sLarge = -Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            sLarge = largest;
            largest = a[i];
        } else if (a[i] < largest && a[i] > sLarge) {
            sLarge = a[i];
        }
    }
    return sLarge;
}
console.log(sLargest(arr));
function sSmallest(a) {
    let smallest = a[0];
    let sSmall = Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < smallest) {
            sSmall = smallest;
            smallest = a[i];
        } else if (a[i] !== smallest && a[i] < sSmall) {
            sSmall = a[i];
        }
    }
    return sSmall
}
console.log(sSmallest(arr));
