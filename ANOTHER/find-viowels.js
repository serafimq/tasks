const findVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = string.split('').reduce((result, item) => {
        return vowels.includes(item) ? result + 1 : result
    }, 0)
    return count;
}

const findVowels2 = (string) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }

    return count;
}

const findVowels3 = (string) => {
    const matched = string.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}

console.log(findVowels('hello'));
console.log(findVowels2('world'));
console.log(findVowels3('worldes'));