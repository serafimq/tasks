const arrOne = [1, 2, 3, 6, 8, 9, 1, 6];
const arrTwo = [1, 2, 6, 8];


const filterArrays = (arr1, arr2) => {
    const resultArray = [];
    const hash = {};

    for (const el of arr2) {
        hash[el] = hash[el] + 1 || 1;
    }

    for (const el of arr1) {
        if (!(el in hash)) {
            resultArray.push(el)
        }
    }

    return resultArray;
}
console.log(filterArrays(arrOne, arrTwo));
