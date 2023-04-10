const input1 = 'letcode';
const input2 = 'loveleetcode';
const input3 = 'aabb';

const firstUniqChar = (str) => {
    const hash = {};

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            hash[str[i]] += 1;
        } else {
            hash[str[i]] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]] === 1) return i;
    }

    return -1;

};

console.log(firstUniqChar(input1));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));