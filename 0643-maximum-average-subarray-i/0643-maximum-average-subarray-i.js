/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let current = 0;

    // First window
    for (let i = 0; i < k; i++) {
        current += nums[i];
    }

    let max = current;

    // Slide the window
    for (let i = 1; i <= nums.length - k; i++) {
        current = current - nums[i - 1] + nums[i + k - 1];

        if (current > max) {
            max = current;
        }
    }

    return max / k;
};