function binarySearchI(arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (target > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}
console.log(binarySearchI([3, 4, 6, 7, 9, 12, 16, 17], 6));

function lowerBound(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] >= target) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}
console.log(lowerBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 7));

function upperBound(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > target) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
} console.log(upperBound([2, 3, 6, 7, 8, 8, 11, 11, 11, 12], 6));

function searchInsertPosition(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] >= target) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}

function floor(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.ceil((low + high) / 2)
        if (arr[mid] <= target) {
            ans = arr[mid]
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return ans
} console.log(floor([10, 20, 30, 40], 25));

function firstNlast(arr, target) {
    let n = arr.length
    let lb = lowerBound(arr, target)
    if (lb == n || arr[lb] !== target) return [-1, -1]
    return [lb, upperBound(arr, target) - 1]
} console.log(firstNlast([2, 4, 6, 8, 8, 8, 11, 13], 8));

function rotatedArraySearch(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == target) return mid
        else if (arr[low] <= arr[mid]) {
            if (arr[low] <= target && arr[mid] >= target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        else {
            if (arr[high] >= target && arr[mid] <= target) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}
console.log(rotatedArraySearch([7, 8, 9, 1, 2, 3, 4, 5, 6], 1));

function rotatedArraySearchII(arr, k) {
    let n = arr.length;
    let low = 0
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == k) return true;
        if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= k && k <= arr[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        else {
            if (arr[mid] <= k && k <= arr[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
    }
    return false;
}

function rotatedMinimum(arr) {
    let n = arr.length - 1
    let low = 0
    let high = n - 1
    let ans = Infinity
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[low] <= arr[mid]) {
            ans = Math.min(ans, arr[low])
            low = mid + 1
        } else {
            high = mid - 1
            ans = Math.min(ans, arr[mid])
        }
    }
    return ans
} console.log(rotatedMinimum([7, 8, 9, 10, 1, 2, 3, 4, 5]));

function elmOnce(arr) {
    let n = arr.length
    let low = 1
    let high = n - 2
    if (n == 1) return arr[0]
    if (arr[0] !== arr[1]) return arr[0]
    if (arr[n - 1] !== arr[n - 2]) return arr[n - 1]
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid]
        }
        if ((mid % 2 !== 0 && arr[mid] == arr[mid - 1]) || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
} console.log(elmOnce([1, 1, 2, 2, 3, 3, 6, 5, 5]));

function peakElement(arr) {
    let n = arr.length
    let low = 1
    let high = n - 2
    if (n == 0) return 0
    if (arr[0] > arr[1]) return 0
    if (arr[n - 1] > arr[n - 2]) return n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid
        } else if (arr[mid] > arr[mid - 1]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
} console.log(peakElement([0, 1, 2, 3, 4, 5, 6, 8, 7]));

function floorSqrt(n, m) {
    function f(mid, n, m) {
        let ans = 1
        for (let i = 1; i <= n; i++) {
            ans *= mid
            if (ans > m) return 2
        }
        if (ans == m) return 1
        return 0
    }
    let low = 1
    let high = m
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (f(mid, n, m) == 1) {
            return mid
        } else if (f(mid, n, m) == 0) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
} console.log(floorSqrt(3, 27));

function kokoEatingBananas(arr, limit) {
    function f(mid) {
        let totalhrs = 0
        for (let i = 0; i < arr.length; i++) {
            totalhrs += (Math.ceil(arr[i] / mid))
        }
        return totalhrs
    }
    let low = 1
    let high = Math.max(...arr)
    let ans = Infinity
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (f(mid) <= limit) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
} console.log(kokoEatingBananas([3, 6, 7, 11], 8));