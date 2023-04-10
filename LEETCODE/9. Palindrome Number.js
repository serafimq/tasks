/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  return x.toString() === x.toString().split('').reverse().join('');
};


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
