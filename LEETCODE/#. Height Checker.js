// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let numberOfIndices = 0;

    const sortHeights = [...heights].sort((a, b) => a - b);
    for (let index = 0; index < heights.length; index++) {
        if (heights[index] !== sortHeights[index]) {
            numberOfIndices += 1;
        }
    }
    return numberOfIndices;
};

console.log(heightChecker([5,1,2,3,4])); // 5
console.log(heightChecker([1,1,4,2,1,3])); // 3
console.log(heightChecker([1,2,3,4,5])); // 0