const arr1 = [1,3,5,6,8, 10, 22, 111];
const arr2 = [2,4,7,9,18];


const fn = (arrOne, arrTwo) => {
    const arrays = [...arrOne, ...arrTwo];

    const hash = {};

    for (let i = 0; i < arrays.length; i++) {
        hash[arrays[i]] = hash[arrays[i]] + 1 || 0;
    }

    const result = Object.keys(hash).map(el => Number(el));
    return result;
}
console.log(fn(arr1, arr2))


//////////////////////

const fn2 = (arrOne, arrTwo) => {
    const result = [];
    let i = 0;
    let y = 0;
    while (arrOne.length > i || arrTwo.length > y) {
        if (arrOne[i] && arrTwo[y]) {
            if (arrOne[i] < arrTwo[y]) {
                result.push(arrOne[i]);
                i += 1;
            } else {
                result.push(arrTwo[y]);
                y += 1;
            }
        } else if (arrOne[i]) {
            result.push(arrOne[i]);
            i += 1;
        } else if (arrTwo[y]) {
            result.push(arrTwo[y]);
            y += 1;
        }
    }
    return result;
}
console.log(fn2(arr1, arr2))
