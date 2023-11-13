// Given an array nums of n integers where nums[i] is in the range [1, n], 
//return an array of all the integers in the range [1, n] that do not appear in nums
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Input: nums = [1,1]
// Output: [2]
const nums = [4,3,2,7,8,2,3,1];
const hash = new Map();
const result = [];

for (let index = 0; index < nums.length; index++) {
    if (!hash.has(nums[index])) {
        hash.set(nums[index], 1)  
    }
}

for (let index = 1; index <= nums.length; index++) {
    if (!hash.has(index)) {
        result.push(index);
    }
}

console.log(result);