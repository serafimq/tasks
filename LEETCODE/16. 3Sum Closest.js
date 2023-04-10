/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2]; // initialize closest sum as the sum of the first three elements
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // left pointer
    let right = nums.length - 1; // right pointer
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // update closest sum if current sum is closer to target
      }
      if (sum > target) {
        right--; // decrement right pointer if current sum is greater than target
      } else if (sum < target) {
        left++; // increment left pointer if current sum is less than target
      } else {
        return sum; // return target if current sum equals target
      }
    }
  }
  return closestSum; // return closest sum
}


console.log(threeSumClosest([-1, 2, 1, -4], 1));

// -4 -1 1 2 => (-4 + -1 + 1 = -4) < (-5 + 2 = -3) 4 < 3
