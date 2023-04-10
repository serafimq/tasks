/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let resultArray = []
  while (nums1.length || nums2.length) {
    if (nums1.length && nums2.length) {
      nums1[0] < nums2[0] ? resultArray.push(nums1.shift()) : resultArray.push(nums2.shift())
    } else if (nums1.length) {
      resultArray = [...resultArray, ...nums1];
      nums1.length = 0;
    } else {
      resultArray = [...resultArray, ...nums2];
      nums2.length = 0;
    }
  }

  return resultArray.length % 2
    ? resultArray[Math.floor((resultArray.length - 1) / 2)]
    : (resultArray[Math.floor((resultArray.length - 1) / 2)] + resultArray[resultArray.length / 2]) / 2;
};

const nums1 = [1, 2], nums2 = [3];

findMedianSortedArrays(nums1, nums2)
