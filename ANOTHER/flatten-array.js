function flattenArray(...stack) {
    const res = [];
    while (stack.length) {
        const el = stack.shift();
        if (Array.isArray(el)) {
            stack.unshift(...el);
            continue;
        }
        res.push(el);
    }
    return res;
}

console.log(flattenArray(1, [2, [3]], 4, 5, [6, [7]]));
console.log(flattenArray('a', ['b', 3], 4, null, [[6], ['c']]));
