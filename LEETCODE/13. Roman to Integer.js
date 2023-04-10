/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dictionary = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];
    const nextSymbol = s[i + 1]
    if (nextSymbol && dictionary[symbol] < dictionary[nextSymbol]) {
      result += (dictionary[nextSymbol] - dictionary[symbol]);
      i++;
    } else {
      result += dictionary[symbol];
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
