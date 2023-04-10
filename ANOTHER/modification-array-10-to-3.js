function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


const arrays = Array(10).fill('-')

const newArr = arrays
    .map(el => {
        const arr = []
        arr.length = randomInteger(1, 10)
        return arr;
    }).reduce((acc, el, i) => {
        acc[i] = el.length;
        return acc;
    }, {})


const objectArray = Object.values(newArr);
const allLength = objectArray.reduce((acc, el) => acc += el, 0) / 3;


const x = Math.floor(allLength);
const result = [];

let numbers = objectArray;
let i = numbers.length;

while (--i > -1) {
    const length = result.length;

    let target = x - numbers[i];
    let a = numbers.length - 1;

    while (target > 0) {
        if (numbers[--a] !== target) {
            if (a === -1) {
                a = numbers.length - 1;
                target--;
            }
            continue;
        }

        result[length] ??= [];
        result[length].push(numbers[a]);

        target = x - numbers[i];

        for (const entry of result[length]) {
            target -= entry;
        }

        numbers = [...numbers.slice(0, a), ...numbers.slice(a + 1)];
        a = numbers.length - 1;
    }

    if (!result[length]) {
        continue;
    }

    result[length].push(numbers[numbers.length - 1]);
    numbers = numbers.slice(0, -1);
    i = numbers.length;
}





