let a = [3, 2, 1, 5, 2]
let largest = a[0];
for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i]
    }
}
console.log(largest);
let arr = [7, 2, 5, 1]
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

function RemoveDuplicatesOptimal(nums) { // yeh mat karo 
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(RemoveDuplicatesOptimal([1, 1, 2, 3, 3]));

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
        } else {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5, 6]));

function rotateByOne(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(rotateByOne([1, 2, 3, 4, 5]));

