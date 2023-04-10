// для одного аргумента передаваемого в myFunc
const memoizer = (func) => {
    let cache = {};
    return (n) => {
        if (cache[n] !== undefined) {
            console.log(`<= Fetching: "${n} from cache`);
            return cache[n];
        } else {
            console.log(`=> Write: "${n} in cache`);
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

let myFunc = (x) => {
    return x;
}

const myFuncMem = memoizer(myFunc)

// еще вариантик

const sum = (a, b) => a + b;

const memoize = (fn) => {
    const cash = {};
    return (x, y) => {
        if (cash[x + y]) {
            console.log('Вернул из cash: ' + cash[x + y]);
            return cash[x + y]
        } else {
            const result = fn(x, y);
            cash[x + y] = result;
            console.log('Добавил в cash: ' + cash[x + y]);
            return result;
        }
    };
}

const memizedSum = memoize(sum)

