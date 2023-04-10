// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
// Example 1:
//
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
//
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.


/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i] * 2] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] !== undefined && i !== hash[arr[i]]) {
      return true;
    }
  }
  return false;
};

console.log(checkIfExist([-2,0,10,-19,4,6,-8]));