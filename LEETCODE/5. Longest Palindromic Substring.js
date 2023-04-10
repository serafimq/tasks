/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let longestPalindrome = '';

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const palindrome1 = expandAroundCenter(i, i);
    const palindrome2 = expandAroundCenter(i, i + 1);

    const currentLongestPalindrome =
      palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

    if (currentLongestPalindrome.length > longestPalindrome.length) {
      longestPalindrome = currentLongestPalindrome;
    }
  }

  return longestPalindrome;
};
let s = 'babad';

console.log(longestPalindrome(s));

