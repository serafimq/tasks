const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

function pipe(funcs) {
    return (number) => {
        let result = number;
        for (const func of funcs) {
            result = func.call(this, result)
        }
        return result;
    }
}

function pipeReduce(funcs) {
    return (number) => {
        return funcs.reduce((res, func) => {
            return func.call(this, res);
        }, number)
    }
}

const a = pipeReduce([times(2), times(4), subtract(3)])
console.log(a(2))