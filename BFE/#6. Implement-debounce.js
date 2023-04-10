const myLog = (text) => {
    console.log(text)
}

function debounce(func, wait) {
    let timeoutId = null;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }

}
const newFunc = debounce(myLog, 3000);

setTimeout(() => newFunc('1'), 1000)
setTimeout(() => newFunc('2'), 2000)
setTimeout(() => newFunc('13'), 6000)
setTimeout(() => newFunc('14'), 7000)
