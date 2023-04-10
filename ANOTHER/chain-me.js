function add(num) {
    return num + 1;
}

function multi(num) {
    return num * 30;
}

function chain(input, fs) {
    return fs.reduce((acc, func, index) => {
        if (index === 0) {
            return acc = func(input)
        } else {
            return acc = func(acc)
        }
    }, 0)
}

console.log(chain(2, [add, multi]));
// returns 90;
