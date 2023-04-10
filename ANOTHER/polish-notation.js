function calculate(expression) {
    const arr = expression.split(' ');
    const stack = [];

    while (arr.length) {
        const el = arr.pop();
        const numberedEl = Number(el);

        if (!isNaN(numberedEl)) {
            stack.push(numberedEl);
            continue;
        }

        const firstNum = stack.pop();
        const secondNum = stack.pop();

        switch (el) {
            case '+':
                stack.push(firstNum + secondNum);
                break;
            case '/':
                stack.push(firstNum / secondNum);
                break;
            case '-':
                stack.push(firstNum - secondNum);
                break;
            case '*':
                stack.push(firstNum * secondNum);
                break;
        }
    }

    return stack[0];
}

console.log(calculate('+ 3 5')); // 8
console.log(calculate('* + 2 2 3')); // 12
console.log(calculate('/ + 3 5 * 2 2')); // 2
