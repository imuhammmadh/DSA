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

function RemoveDuplicatesOptimal(nums) {
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

function move0toLastBrute(arr) {
    let temp = [];
    let l = arr.length;
    for (let i = 0; i < l; i++) {
        if (arr[i] != 0) {
            temp.push(arr[i]);
        }
    }
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    let nz = temp.length;
    for (let i = nz; i < l; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log(move0toLastBrute([1, 0, 2, 3]));

function moveZeroToEnd(arr) {
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }
    if (j === -1) return "There is no zero in and array";
    for (i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [([arr[i], arr[j]] = [arr[j], arr[i]])];
            // 1     2           2     1   
            j++;
        }
    }
    return arr;
}
console.log(moveZeroToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));

function intersection(a, b) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else if (b[j] < a[i]) {
            j++;
        } else {
            result.push(a[i]);
            i++;
            j++;
        }
    }
    return result;
}
console.log(intersection([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));
