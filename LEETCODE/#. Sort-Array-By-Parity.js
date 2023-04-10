// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
//
// Return any array that satisfies this condition.
// Example 1:
//
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:
//
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const parityArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      parityArray.push(nums[i]);
      nums.splice(i, 1)
      nums.unshift('x');
      i--;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 'x') {
      nums[i] = parityArray.shift();
    }
  }
  return nums;
};

console.log(sortArrayByParity([0]));