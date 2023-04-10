const arr = [4, 1, 2, 4, 7, 2, 1, 7, 1];

const singleNumber = (numbers) => {
    const hash = {}

    for (const number of numbers) {
        hash[number] = hash[number] + 1 || 1;
    }


    let result = Object.keys(hash).filter(num => {
        if (hash[num] % 2 !== 0 ) {
            return num;
        }
    })

    console.log(hash);
    return result;
}

console.log(singleNumber(arr));