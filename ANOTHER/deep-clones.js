function deepCloneObj(object) {
    const copyObj = {...object};

    Object.entries(copyObj).forEach(([key, value]) => {
        copyObj[key] = typeof value === 'object' ? deepCloneObj(value) : value;
    })

    return copyObj;
}

const a = {a: {b: {c:1}}}
const b = {...a}
const c = deepCloneObj(a);

a.a.b.c = 5;

console.log(b)
console.log(c)

function deepCloneArray(array) {
    return array.map(el => Array.isArray(el) ? deepCloneArray(el) : el);
}

const z = [1, [2, [3]]]
const y = [...z]
const w = deepCloneArray(z);

z[1][1][0] = 13;

console.log(y)
console.log(w)
