let arr = [3, 2, 1, 5, 2];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest)
        largest = arr[i];
};
console.log(largest);