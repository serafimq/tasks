const arr = [1, 2, 3, 4];

function shuffle(arr) {
    return arr.sort((a, b) => ((b * Math.random() * arr.length) - a * Math.random() * arr.length));
}

function shuffle2(arr) {
    for (let i = 0; i < arr.length; i++) {
        const j = i + Math.floor(Math.random() * (arr.length - i));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

function shuffle3(oldArr) {
    const result = [];

    while (oldArr.length) {
        const random_index = Math.floor(Math.random() * oldArr.length);
        result.push(oldArr[random_index]);
        oldArr.splice(random_index, 1);
    }
    oldArr = result
    return oldArr;
}

function shuffle4(arr) {
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) {
        const randomIndex = Math.floor(Math.random() * lastIndex);
        [arr[lastIndex], arr[randomIndex]] = [arr[randomIndex], arr[lastIndex]]
        lastIndex -= 1;
    }
}

shuffle4(arr);
console.log(arr);