const arr = [4, 5, 6, 0, 1, 2, 3]

const searchTarget = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            return middle;
        }

        if (arr[start] <=arr[middle]) {
            if (arr[start] <= target && target <= arr[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if(arr[middle] <= target && target <= arr[end]) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }
}


console.log(searchTarget(arr, 2))