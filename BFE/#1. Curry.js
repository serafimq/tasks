const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

// first
const curry = (func) => {
    return function curryFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }
        return function (...newArgs) {
            return curryFunc(...args.concat(newArgs));
        }
    }
}

// second
const curry2 = (func) => {
    return function curryFunc(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        }
        return curryFunc.bind(this, ...args)
    }
}

const curriedJoin = curry(join);

console.log({
    1: curriedJoin(1, 2, 3), // '1_2_3'
    2: curriedJoin(1)(2, 3), // '1_2_3'
    3: curriedJoin(1, 2)(3), // '1_2_3'
    4: curriedJoin(1)(2)(3), // '1_2_3'
});
