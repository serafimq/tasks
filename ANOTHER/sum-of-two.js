const arr = [7, 9, 11, 12, 15]

// возвращаем числа, которые дадут в сумме target
const sumOfTwo = (arr, target) => {
    let i = 0;
    let j = 1;

    let start;
    let finish;

    arr.sort((a, b) => a - b);

    while (arr[i] < arr[arr.length - j] ) {
        start = arr[i];
        finish = arr[arr.length - j];
        if (start + finish === target) {
            return [start, finish];
        } else if (start + finish < target) {
            i += 1;
        } else {
            j += 1;
        }
    }
    return 'Нет таких чисел';
}

// возвращаем индексы числе в массиве, которые дадут в сумме target
const sumOfTwoFromHash = (arr, target) => {
    const numObject = {};

    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log('arr[i]', arr[i]);
        const diff = target - arr[i];
        console.log('diff', diff);

        if (numObject[diff] && numObject[diff] !== i) {
            console.log(numObject);
            return [i, numObject[diff]]
        }
    }
    console.log(numObject);
    return [];
}


// console.log(sumOfTwo(arr, 33));
console.log(sumOfTwoFromHash(arr, 14));