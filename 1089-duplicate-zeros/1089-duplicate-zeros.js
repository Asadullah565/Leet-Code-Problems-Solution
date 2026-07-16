/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = 0;
    let n = arr.length;

    // Pass 1: Count zeros
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zeros++;
        }
    }

    // Pass 2: Traverse from the end
    let i = n - 1;
    let j = n + zeros - 1;

    while (i >= 0) {
        if (j < n) {
            arr[j] = arr[i];
        }

        if (arr[i] === 0) {
            j--;
            if (j < n) {
                arr[j] = 0;
            }
        }

        i--;
        j--;
    }
};