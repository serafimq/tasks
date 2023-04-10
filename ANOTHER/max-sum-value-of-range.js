// todo: найти наибольшую сумму в диапазоне, которую мы передали в массиве
// где range =[от сюда, до сюда] => arr[от сюда] + arr[от сюда + n] + ... + arr[до сюда]
const array = [1, -2, 3, 4, -5, -4, 3, 2, 1]; // => [1, -1, 2, 6, 1, -3, 0, 2, 3]
const ranges = [[1, 3], [0, 4], [6, 8]]; // => result 6
const ranges2 = [[1, 3]]; // => result 5
const ranges3 = [[1, 4]]; // => result 0

const maxSum = (arr, renges) => {
    const sumFrom0toN = [];
    for (let i = 0; i < arr.length; i++) {
        sumFrom0toN[i] = (sumFrom0toN[i - 1] || 0) + arr[i];
    }
    let currentMaxResult = -Infinity;

    for (let i = 0; i < renges.length; i++) {
        const [start, end] = renges[i];
        const sum = sumFrom0toN[end] - (sumFrom0toN[start - 1] || 0);
        if (sum > currentMaxResult) {
            currentMaxResult = sum;
        }
    }
    return currentMaxResult;
}

console.log(maxSum(array, ranges), '==> 6');
console.log(maxSum(array, ranges2), '==> 5');
console.log(maxSum(array, ranges3), '==> 0');