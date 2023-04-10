const numberOfPairs = (gloves) => {
    const hash = {};

    for (let sameColor of gloves) {
        hash[sameColor] = hash[sameColor] + 1 || 1;
    }

    return Object.entries(hash).reduce((acc, item) => {
        if (item[1] % 2 !== 0 && item[1] - 1 > 0) {
            return acc += ((item[1] - 1) / 2);
        }
        if (item[1] % 2 === 0) return acc += item[1] / 2
        return acc;
    },0);
}

const pairs = numberOfPairs(["red", "green", "red", "blue", "blue", "green", "red", "green", "red"])
