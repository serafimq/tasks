function sum(a, b, c) {
    return a + b + c;
}

function multi(a, b, c) {
    return a * b * c;
}

function carrying(fn) {
    return function curried (...args) {
        if (args.length >= fn.length) { // fn.length => показывает кол-во аргументов переданных в функцию
            // если хотим использовать функцию внутри класса fn.call(this, ...args);
            //return fn.call(this, ...args);
            return fn(...args);
        }

        // попытка через bind
        //return curried.bind(this, ...args);

        return function (...newArgs) {
            return curried(...args.concat(newArgs))
        }

    }
}

const curriedSum = carrying(sum);
const curriedMulti = carrying(multi);

console.log(curriedSum(2, 3, 4))
console.log(curriedSum(2)(4)(3))
// console.log(curriedMulti(2)(4, 3))
// console.log(curriedMulti(2, 3, 4))
