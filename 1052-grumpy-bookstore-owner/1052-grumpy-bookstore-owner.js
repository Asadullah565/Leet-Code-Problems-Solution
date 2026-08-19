/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let satisfied = 0;

    // Customers already satisfied
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            satisfied += customers[i];
        }
    }

    // First window
    let window = 0;

    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            window += customers[i];
        }
    }

    let maxWindow = window;

    // Slide the window
    for (let i = minutes; i < customers.length; i++) {

        // Add new element
        if (grumpy[i] === 1) {
            window += customers[i];
        }

        // Remove element leaving the window
        if (grumpy[i - minutes] === 1) {
            window -= customers[i - minutes];
        }

        maxWindow = Math.max(maxWindow, window);
    }

    return satisfied + maxWindow;
};