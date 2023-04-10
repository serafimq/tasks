const string = 'racecar';
const string2 = 'table';

// const palindrome = (str) => {
//     //приводим к нижнему регистру и при помощи регулярки удаляем пробелы
//     str = str.toLowerCase().replace(/\s/g, '');
//     return str === str.split('').reverse().join('');
// }

const palindrome_two = (str) => {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    return true;
}

console.log(palindrome_two(string));
console.log(palindrome_two(string2));