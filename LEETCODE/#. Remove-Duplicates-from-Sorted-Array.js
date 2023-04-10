// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0,0,1,1,1,2,2,3,3,4];
const removeDuplicates = function(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== undefined && nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length;
};

console.log(removeDuplicates(nums));