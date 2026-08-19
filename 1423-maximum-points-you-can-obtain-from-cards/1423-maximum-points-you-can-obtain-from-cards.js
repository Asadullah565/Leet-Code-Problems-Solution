/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;

    // Total sum of all cards
    let totalSum = 0;

    for (let card of cardPoints) {
        totalSum += card;
    }

    // Number of cards that we leave behind
    let windowSize = n - k;

    // If we take all cards
    if (windowSize === 0) {
        return totalSum;
    }

    // First window
    let windowSum = 0;

    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindow = windowSum;

    // Slide the window
    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i];
        windowSum -= cardPoints[i - windowSize];

        minWindow = Math.min(minWindow, windowSum);
    }

    return totalSum - minWindow;
};