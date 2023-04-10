const arr = [11, 22, 33, 44, 52, 62, 73];

// Сложность 0(n2), память O(n)
const arrayShuffle = (arr) => {
    const indexArray = [];
    const resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        indexArray.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * indexArray.length);
        resultArray.push(arr[indexArray.splice(rand, 1)]);
    }

    return resultArray;
};
// Сложность 0(n2), память O(n)
const arrayShuffle2 = (arr) => {
    const result = [];
    while (arr.length) {
        let rand = Math.floor(Math.random() * arr.length);
        result.push(arr.splice(rand, 1)[0]);
    }
    return result;
}

// Алгоритм Фишера Ейца => сложность 0(n), память O(1)
const arrayShuffleFisher = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let tmp = arr[i];
        let rand = Math.floor(Math.random() * arr.length);
        arr[i] = arr[rand];
        arr[rand] = tmp;
    }
    return arr;
}


console.log(arrayShuffle(arr));
console.log(arrayShuffle2(arr));
console.log(arrayShuffleFisher(arr));