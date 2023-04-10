const anagram = (first, second) => {
    if (first.length !== second.length) return false;
    return first.toLowerCase().split('').sort().join('') === second.toLowerCase().split('').sort().join('');
}

const buildCharObject = (str) => {
    const hash = {};
    str = str.toLowerCase().replace(/[^\w]/g); // удаляем из строки все символы кроме \w - (цифра, буква, или знак подчеркивания)
    for (let strElement of str) {
        // заполняем hash таблицу, если элемент есть в таблице, то + 1 делаем к предыдущему, если нет то ставим 1
        hash[strElement] = hash[strElement] + 1 || 1;
    }
    return hash;
}

const anagram2 = (first, second) => {
    const strA = buildCharObject(first);
    const strB = buildCharObject(second);

    if (Object.keys(strA).length !== Object.keys(strB).length) return false;
    for (let char in strA) {
        if (strA[char] !== strB[char]) {
            return false;
        }
    }
    return true;
}


console.log(anagram2('friend1', 'Fen1dir'));
console.log(anagram2('hello', 'bye'));