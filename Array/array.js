function Maximum(nums) {
    let largest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (largest < nums[i]) {
            largest = nums[i]
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
            sLargest = largest
            largest = a[i]
        } else if (largest > a[i] && a[i] > sLargest) {
            sLargest = a[i]
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

function RemoveDuplicates(nums) {
    if (nums.length == 0) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            nums[i + 1] = nums[j]
            i++
        }
    }
    return i + 1
}
console.log(RemoveDuplicates([1, 2, 3, 3]));

function isSorted(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5, 6]));

function rotateByOne(nums) {
    let temp = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] = nums[i];
    }
    nums[nums.length - 1] = temp
    return nums;
}
console.log(rotateByOne([1, 2, 3, 4, 5]));

function moveZeroToEnd(nums) {
    let j = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            j = i;
            break
        }
    }
    for (let i = j + 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [([nums[i], nums[j]] = [nums[j], nums[i]])];
            j++;
        }
    }
    return nums;
}
console.log(moveZeroToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));

function unionArray(a, b) {
    let n1 = a.length
    let n2 = b.length
    let union = []
    let i = 0
    let j = 0
    while (i < n1 && j < n2) {
        if (a[i] <= b[j]) {
            if (union.length === 0 || union[union.length - 1] !== a[i]) {
                union.push(a[i])
            }
            i++
        } else {
            if (union.length === 0 || union[union.length - 1] !== b[j]) {
                union.push(b[j])
            }
            j++
        }
    }
    while (j < n2) {
        if (union.length === 0 || union[union.length - 1] !== b[j]) {
            union.push(b[j])
        }
        j++
    }
    while (i < n1) {
        if (union.length === 0 || union[union.length - 1] !== a[i]) {
            union.push(a[i])
        }
        i++
    }
    return union
}
console.log(unionArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));

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

function missingNumber(nums, n) {
    let sum = n * (n + 1) / 2;
    let missed = 0;
    for (let i = 0; i < nums.length; i++) {
        missed += nums[i];
    }
    return sum - missed;
}
console.log(missingNumber([1, 2, 4, 5], 5));

function findMaxConsecutivesOnes(nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            counter++;
            max = Math.max(max, counter)
        } else {
            counter = 0;
        }
    }
    return max;
}
console.log(findMaxConsecutivesOnes([1, 0, 1, 1, 1, 0, 1, 1]));

function appearedOnce(nums) {
    let xorr = 0
    for (let i = 0; i < nums.length; i++) {
        xorr = xorr ^ nums[i]
    }
    return xorr
}
console.log(appearedOnce([4, 1, 2, 1, 2]));

function longestSubnumsayWithSumK(a, k) {
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
console.log(longestSubnumsayWithSumK([1, 2, 3, 1, 1, 1, 1, 3, 3], 6));

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    nums.sort(function (a, b) { return a - b });
    while (left < right) {
        let sum = nums[left] + nums[right];
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

function Majority(nums) {
    let counter = 0
    let element
    for (let i = 0; i < nums.length; i++) {
        if (counter == 0) {
            counter = 1
            element = nums[i]
        } else if (nums[i] == element) {
            counter++
        } else {
            counter--
        }
    }
    let counter2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == element) {
            counter2++
        }
    }
    if (counter2 > ((nums.length) / 2)) {
        return element
    }
    return -1
}
console.log(Majority([5, 5, 1, 5, 5, 5, 7, 2, 5, 5, 5, 5]));

function maxSubnumsaySumKadane(nums) {
    let sum = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
console.log(maxSubnumsaySumKadane([-2, -3, 4, -1, -2, 5, -3]));

function reArrangenumsarray(nums) {
    let positive = 0;
    let negative = 1;
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans[positive] = nums[i];
            positive += 2;
        } else {
            ans[negative] = nums[i];
            negative += 2;
        }
    }
    return ans;
}
console.log(reArrangenumsarray([-4, 2, 3, -1]));

function maximumProfit(prices) {
    let mini = prices[0];
    let maxProfit = 0;
    let l = prices.length;
    for (let i = 0; i < l; i++) {
        let cost = prices[i] - mini;
        maxProfit = Math.max(maxProfit, cost);
        mini = Math.min(mini, prices[i]);
    }
    return maxProfit;
}
console.log(maximumProfit([7, 1, 3, 6, 5, 2, 4]));

function superiorElements(nums) {
    let ans = [];
    let max = -Infinity;
    let n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > max) {
            ans.push(nums[i]);
        }
        max = Math.max(max, nums[i]);
    }
    nums.sort(function (a, b) { return a - b });
    return ans;
}
console.log(superiorElements([10, 22, 12, 4, 0, 6]));

function longestSuccessiveElements(nums) {
    if (nums.length == 0) return 0;
    nums.sort(function (a, b) { return a - b });
    let n = nums.length;
    let lastSmaller = -Infinity;
    let count = 0;
    let longest = 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] - 1 == lastSmaller) {
            count += 1;
            lastSmaller = nums[i];
        } else if (lastSmaller != nums[i]) {
            count = 1;
            lastSmaller = nums[i];
        }
        longest = Math.max(longest, count);
    }
    return longest;
}
console.log(longestSuccessiveElements([1, 2, 3, 4, 5, 6, 8, 7]));

function threeSum(nums) {
    let integer = []
    nums.sort((a, b) => { return a - b })
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) {
                j++
            } else if (sum > 0) {
                k--
            } else {
                let temp = [nums[i], nums[j], nums[k]]
                integer.push(temp)
                j++
                k--
                while (j < k && nums[j] == nums[j - 1]) j++
                while (j < k && nums[k] == nums[k + 1]) k--
            }
        }
    }
    return integer
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function majorityElement(nums) {
    let cnt1 = 0
    let cnt2 = 0
    let el1 = -Infinity
    let el2 = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (cnt1 == 0 && el2 != nums[i]) {
            cnt1 = 1
            el1 = nums[i]
        } else if (cnt2 == 0 && el1 != nums[i]) {
            cnt2 = 1
            el2 = nums[i]
        } else if (nums[i] == el1) {
            cnt1++
        } else if (nums[i] == el2) {
            cnt2++
        } else {
            cnt1--
            cnt2--
        }
    }
    let number = []
    cnt1 = 0
    cnt2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (el1 == nums[i]) {
            cnt1++
        }
        if (el2 == nums[i]) {
            cnt2++
        }
    }
    let mini = Math.floor(nums.length / 3) + 1
    if (cnt1 >= mini) {
        number.push(el1)
    }
    if (cnt2 >= mini) {
        number.push(el2)
    }
    number.sort(function (a, b) { return a - b });
    return number
}
console.log(majorityElement([11, 33, 33, 11, 33, 11, 12, 12, 12, 12]));

function misssingNrepeating(a) {
    let n = a.length
    let sn = (n * (n + 1)) / 2
    let s2n = (n * (n + 1) * (2 * n + 1)) / 6
    let s = 0
    let s2 = 0
    for (let i = 0; i < n; i++) {
        s += a[i]
        s2 += a[i] * a[i]
    }
    let value1 = s - sn
    let value2 = s2 - s2n
    value2 = value2 / value1
    let x = (value1 + value2) / 2
    let y = x - value1
    return [x, y]
}
console.log(misssingNrepeating([4, 3, 5, 6, 1, 1]));

function maxProductSubarray(nums) {
    let prefix = 1
    let suffix = 1
    let ans = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (prefix === 0) prefix = 1
        if (suffix === 0) suffix = 1
        prefix *= nums[i]
        suffix *= nums[(nums.length) - i - 1]
        ans = Math.max(ans, Math.max(prefix, suffix))
    }
    return ans
}
console.log(maxProductSubarray([1, 2, -3, 0, -4, -5]));

console.log(x);
let x = 5