const brackets0 = '({)';
const brackets1 = '({})[](({{{}}}))';
const brackets2 = '({})[(({{{}}}))';
const brackets3 = '({})](({{{}}}))';

const checkBrackets = (brackets) => {
    let stack = [];
    let hash = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < brackets.length; i++) {
        const current = brackets[i];

        if (isClosedBracket(current)) {
            if (stack.pop() !== hash[current]) return false;
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0;
}

const isClosedBracket = (ch) => {
    return [')', '}', ']'].indexOf(ch) > -1;
}

console.log(checkBrackets(brackets0))
console.log(checkBrackets(brackets1))
console.log(checkBrackets(brackets2))
console.log(checkBrackets(brackets3))

///////////////////////////// чуть позже такой вариант придумал //////////////////////

const bracketsOne = '()()()';
const bracketsTwo = '{[()(]}';
const bracketsThree = '((({[]}})))';
const bracketsFour = '(((}))';

const isClosetBracket = (bracket) => {
    if (bracket[0] === ')' || bracket[0] === '}' || bracket[0] === ']') return false;
    if (bracket[bracket.length - 1] === '(' || bracket[bracket.length - 1] === '{' || bracket[bracket.length - 1] === '{') return false;

    const typesBrackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const stack = [];
    let brackets = bracket.split('');
    stack.push(brackets.shift());
    while (brackets.length) {
        const currentBracket = brackets.shift();
        if (!typesBrackets[currentBracket]) {
            stack.push(currentBracket);
        } else {
            if (stack.pop() !== typesBrackets[currentBracket]) return false
        }
    }
    return true
}

console.log(isClosetBracket(bracketsOne))
