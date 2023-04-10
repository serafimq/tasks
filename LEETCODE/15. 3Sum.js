/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        k--;
        j++;
      }
    }
  }

  return result;
};

const numbers = [-1, 0, 1, 2, -1, -4];
const numbers1 = [0, 1, 1];
const numbers2 = [0, 0, 0];
const numbers3 = [-1, 0, 1];
const numbers4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

// console.log(threeSum(numbers));
// console.log(threeSum(numbers1));
// console.log(threeSum(numbers2));
// console.log(threeSum(numbers3));
console.log(threeSum(numbers4));
