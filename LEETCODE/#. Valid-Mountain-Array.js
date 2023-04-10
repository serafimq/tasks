// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
//
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
//    arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
//
// Example 1:
//
// Input: arr = [2,1]
// Output: false
// Example 2:
//
// Input: arr = [3,5,5]
// Output: false
// Example 3:
//
// Input: arr = [0,3,2,1]
// Output: true

// let count = 1;
//
//
//      6
//    4   4       4
//   3      3   3
//  2         2
// 1

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3 ) return false;
  if (arr.length === 3) {
      return arr[0] < arr[1] && arr[1] > arr[2]
  };
  let count = 1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] === arr[i] || arr[i] === arr[i + 1]) return false;
    if (arr[i - 1] <= arr[i] && arr[i] >= arr[i + 1]) count--;
    if (arr[i - 1] >= arr[i] && arr[i] <= arr[i + 1]) count--;
  }
  return count === 0;
};

console.log(validMountainArray([1,2]), ':=> false');
console.log(validMountainArray([1,2,1]), ':=> true');
console.log(validMountainArray([2,0,2]), ':=> false');
console.log(validMountainArray([1,1,1,1,1,1,1,2,1]), ':=> false');
console.log(validMountainArray([0,3,2,1]), ':=> true');
console.log(validMountainArray([1,2,3,4,5,4,3,4,5]), ':=> false');
console.log(validMountainArray([4,4,3,2,1]), ':=> false');