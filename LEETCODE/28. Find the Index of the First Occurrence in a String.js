/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack.startsWith(needle)) return -1;
  return haystack.indexOf(needle)
};

let haystack = "sadbutsad", needle = "sad";
// let haystack = "leetcode", needle = "leeto";


console.log(strStr(haystack, needle));
