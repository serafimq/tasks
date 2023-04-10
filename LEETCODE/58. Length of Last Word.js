/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arrWords = s.trim().split(' ');
  const lastElemArrWords = arrWords.length - 1;
  return arrWords[lastElemArrWords].length;
};

let s = "Hello World";
let s2 = "   fly me   to   the moon  ";

lengthOfLastWord(s2);
