// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [0,0,1];
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push('x');
      i--;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 'x') {
      nums.splice(i, 1, 0)
    }
  }
};
moveZeroes(nums);
console.log({nums});
