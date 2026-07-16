// /**
//  * @param {number[]} arr
//  * @return {void} Do not return anything, modify arr in-place instead.
//  */
// /**
//  * @param {number[]} arr
//  * @return {void} Do not return anything, modify arr in-place instead.
//  */
// var duplicateZeros = function(arr) {
//     let zeros = 0;
//     let n = arr.length;

//     // Pass 1: Count zeros
//     for (let i = 0; i < n; i++) {
//         if (arr[i] === 0) {
//             zeros++;
//         }
//     }

//     // Pass 2: Traverse from the end
//     let i = n - 1;
//     let j = n + zeros - 1;

//     while (i >= 0) {
//         if (j < n) {
//             arr[j] = arr[i];
//         }

//         if (arr[i] === 0) {
//             j--;
//             if (j < n) {
//                 arr[j] = 0;
//             }
//         }

//         i--;
//         j--;
//     }
// };

/**
 * @param {number[]} arr
 * @return {void}
 */
var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // Insert another 0 at index i
            arr.pop();           // Remove the last element to keep the same length
            i++;                 // Skip the duplicated zero
        }
    }
};