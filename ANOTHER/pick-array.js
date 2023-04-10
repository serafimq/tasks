// Найти пик (наибольшее число в массиве)
const arr = [1, 2, 3, 4, 7, 11, 13, 2, 1];

const checkArrayPick = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    while (start < end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return ['pick=', arr[start],'index=', start];
}

console.log(checkArrayPick(arr));