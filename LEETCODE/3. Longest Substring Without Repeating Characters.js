/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length || s.length === 1) return s.length;

  let count = s[0];
  let maxCount = s[0] === s[1] ? 1 : 2;

  for (let i = 1; i < s.length; i++) {
    const element = s[i];
    count.includes(element)
      ? count = count.slice(count.indexOf(element) + 1) + element
      : count += element
    maxCount = Math.max(maxCount, count.length)
  }

  return maxCount;
};


console.log(lengthOfLongestSubstring("dvdf"))
