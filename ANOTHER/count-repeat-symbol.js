let string = 'AABCCCH';

function newString(str) {
    let result = '';
    let counter = 1;

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
            continue;
        }
        result += str[i];
        if (counter > 1) {
            result += String(counter);
        }
        counter = 1;
    }

    return result;
}

console.log(newString(string));

