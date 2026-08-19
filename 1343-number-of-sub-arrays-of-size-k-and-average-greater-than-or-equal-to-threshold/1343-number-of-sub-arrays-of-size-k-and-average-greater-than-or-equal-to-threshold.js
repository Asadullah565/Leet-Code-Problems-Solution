/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let windowSum = 0;
    let count = 0;

    // Create the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // Check the first window
    if (windowSum >= k * threshold) {
        count++;
    }

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];

        if (windowSum >= k * threshold) {
            count++;
        }
    }

    return count;
};