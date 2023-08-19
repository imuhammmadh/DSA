function Maximum(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest;
}
console.log(Maximum([3, 2, 8, 1, 5]));

function sLargest(a) {
    let largest = a[0];
    let sLargest = -Infinity;
    for (let i = 0; i < a.length; i++) {
        if (largest < a[i]) {
            sLargest = largest;
            largest = a[i];
        } else if (largest > a[i] && a[i] > sLargest) {
            sLargest = a[i];
        }
    }
    return sLargest;
}
console.log(sLargest([1, 3, 2, 6, 5]));

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
console.log(sSmallest([7, 2, 5, 1]));

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
console.log(RemoveDuplicatesOptimal([1, 2, 3, 3]));

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isSorted([1, 2, 3, 4, 5, 6]));

function rotateByOne(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp
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
        if (arr[i] == 0) {
            j = i;
            break
        }
    }
    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [([arr[i], arr[j]] = [arr[j], arr[i]])];
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
        } else if (a[i] > b[j]) {
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

function missingNumber(arr, n) {
    let sum = n * (n + 1) / 2;
    let missed = 0;
    for (let i = 0; i < arr.length; i++) {
        missed += arr[i];
    }
    return sum - missed;
}
console.log(missingNumber([1, 2, 4, 5], 5));

function findMaxConsecutivesOnes(arr) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            counter++;
            max = Math.max(max, counter)
        } else {
            counter = 0;
        }
    }
    return max;
}
console.log(findMaxConsecutivesOnes([1, 0, 1, 1, 1, 0, 1, 1]));

function longestSubarrayWithSumK(a, k) {
    let left = 0
    let right = 0;
    let sum = a[0];
    let maxL = 0;
    let n = a.length;
    while (right < n) {
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }
        if (sum == k) {
            maxL = Math.max(maxL, right - left + 1)
        }
        right++;
        if (right < n) {
            sum += a[right];
        }
    }
    return maxL;
}
console.log(longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1, 3, 3], 6));

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    arr.sort(function (a, b) { return a - b });
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == target) {
            return "YES";
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return "NO";
}
console.log(twoSum([2, 6, 5, 11, 8], 14));

function Majority(arr) {
    let counter = 0;
    var element;
    for (let i = 0; i < arr.length; i++) {
        if (counter == 0) {
            counter = 1;
            element = arr[i]
        } else if (arr[i] == element) {
            counter++;
        } else {
            counter--;
        }
    }
    let counter2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            counter2++;
        }
    }
    if (counter2 > (arr.length / 2)) {
        return element;
    }
    return -1;
}
console.log(Majority([5, 5, 1, 5, 5, 5, 7, 2, 5, 5, 5, 5]));

function maxSubarraySumKadane(arr) {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
console.log(maxSubarraySumKadane([-2, -3, 4, -1, -2, 5, -3]));

function rearrangeArray(arr) {
    let positive = 0;
    let negative = 1;
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ans[positive] = arr[i];
            positive += 2;
        } else {
            ans[negative] = arr[i];
            negative += 2;
        }
    }
    return ans;
}
console.log(rearrangeArray([-4, 2, 3, -1]));