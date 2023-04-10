/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  let hasCommonPrefix = true;
  let counterPrefix = 1;
  let pref = strs[0][0];

  while (hasCommonPrefix) {
    if (strs.every(el => el.startsWith(pref))) {
      result = pref;
      if (strs[0][counterPrefix]) {
        pref += strs[0][counterPrefix];
        counterPrefix += 1;
      } else {
        return result;
      }
    } else {
      hasCommonPrefix = false;
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
