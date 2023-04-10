// https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
//
let nums = [1,7,3,6,5,6];
let nums1 = [1,2,3];
let nums2 = [2,1,-1];
let nums3 = [-1,-1,-1,-1,-1,0];
let nums4 = [-1,-1,-1,-1,-1,-1];
let nums5 = [-1,-1,-1,0,1,1];
let nums6 = [-1,-1,-1,-1,0,1];
// 1 7 3 6 5 6
// i = 3
//  1+7=8  3 6+5+6=17

// my resolve (bad)
const pivotIndex = function(nums) {
    let result = -1;
    const summ = (arr) => {
        if (!arr.length) return 0;
        return arr.reduce((acc, el) => acc += el)
    }

    for (let i = 0; i < nums.length ; i++) {
        let left = 0, right = 0;
        left = summ(nums.slice(0, i));
        right = summ(nums.slice(i + 1));
        if (left === right) return i;
    }
    return result;
};

// top resolve
const pivotIndexTop = function(nums) {
    const sum = nums.reduce((r, n)=>r + n, 0);
    let left = 0;
    for (let i=0; i < nums.length; i++) {
        const right = sum - left - nums[i];
        if(left === right) {
            return i;
        }
        left += nums[i]
    }
    return -1
};

console.log(pivotIndex(nums))