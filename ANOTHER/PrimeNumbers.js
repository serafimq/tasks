// 1. isPrimeNumber - проверка является ли число простым, т.е. делиться только на 1 и на само себя
// 2.1 getPrimeNumbers - найти все простые числа (обычный перебор)
// 2.2 getPrimeNumbers - найти все простые числа (решето эратосфена)

const isPrimeNumber = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
        return number > 1;
}


const getPrimeNumbers = (number) => {
    let count = []
    for (let i = 2; i <= number; i++) {

    isPrimeNumber(i) ? count.push(i) : '';
    }
    console.log(14 * 3);
    console.log(count.length);
    return count;
}

const getPrimeNumbers2 = (number) => {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= number ; i++) {
        if (!seive[i]) {
            primes.push(i);
            for (let j = i * 2; j <= number; j += i) {
                seive[j] = true;
            }
        }
    }
    console.log(seive);
    return primes;
}

console.log(isPrimeNumber(7));
console.log(getPrimeNumbers(181))
console.log(getPrimeNumbers2(181))