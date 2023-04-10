const input1 = 'babad';
const input2 = 'cbbd';
const input3 = 'mississippi';
const input4 = 'hello';

const longestPalindrome = (string) => {
    let palindrome = string.split('').reverse().join('');
    if (string.length < 2) {
        return string;
    }

    if (string === palindrome) {
        return string;
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < string.length; i++) {
        let len1 = expandFromCenter(string, i, i);
        let len2 = expandFromCenter(string, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > right - left) {
            left = Math.ceil(i - (len - 1) / 2);
            right = Math.floor(i + (len / 2));
        }
    }

    function expandFromCenter(s, L, R) {
        while (L >=0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }
        return R - L - 1;
    }

    return string.substring(left, right + 1);
}

console.log(longestPalindrome(input1));
console.log(longestPalindrome(input1));
console.log(longestPalindrome(input3));
console.log(longestPalindrome(input4));