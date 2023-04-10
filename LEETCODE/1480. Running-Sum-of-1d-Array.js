// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// is my
const runningSum = function(nums) {
    let nextCount = 0;
    const result = nums.reduce((acc, el) => {
        acc.push(nextCount += el);
        return acc;
    }, []);

    return result;
};

// is best time resolve
const runningSum = function(nums) {
    let previous = 0, res = [];

    for (let num of nums) {
        previous += num
        res.push(previous)
    }

    return res;
};