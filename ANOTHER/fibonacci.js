const fibonacci = (n) => {
    if (n === 1) return 0
    const result = [0, 1];

    for (let i = 3; i <= n; i++) {
        const first = result[0]
        const second = result[1]
        result[0] = second;
        result[1] = first + second;
    }

    return result[1];
}

// не учитывает 0
const fibonacciRec = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacciRec(n - 1) + fibonacciRec(n-2);
}


console.log(fibonacci(3));    // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacciRec(3)); // 0, 1, 1, 2, 3, 5, 8, 13