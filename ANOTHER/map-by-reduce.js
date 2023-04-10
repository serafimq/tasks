Array.prototype.mapByReduce = function (fn) {
    return this.reduce((acc, el, i) => {
        acc.push(fn(el, i))
        return acc;
    }, [])
}

const arr = [1, 2, 3, 4].mapByReduce((el , i) => {
    return el * 3;
})

console.log(arr) // [3, 6, 9, 12]
