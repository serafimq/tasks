/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const dictionary = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (dictionary[element]) {
      if (stack.pop() !== dictionary[element]) return false;
    } else {
      stack.push(element);
    }

  }
  return !stack.length;
};

let s = "(]";
console.log(isValid(s));
