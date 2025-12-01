// Leetcode #11
// https://leetcode.com/problems/container-with-most-water/
// Solved in 16.5 Minutes

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let ptrA = 0
    let ptrB = height.length - 1
    let result = -Infinity

    while (ptrB > ptrA) {
        const maxFillHeight = Math.min(height[ptrA], height[ptrB])
        const maxFillWidth = ptrB - ptrA
        const maxFill = maxFillHeight * maxFillWidth

        if (maxFill > result) {
            result = maxFill
        }
        if (height[ptrA] < height[ptrB]) {
            ptrA = ptrA + 1
        } else if (height[ptrB] < height[ptrA]) {
            ptrB = ptrB - 1
        } else {
            ptrB = ptrB - 1
        }
    }

    return result

};

// need to find the maximum height where ptrA is at least as high as ptrB and vice versa
// init ptrA and Ptr B at opposite ends of the array
// init the maximum container
// always move the pointer that points to the lower line
// keep track of the index distance between pointers, return that times the height
// first solve for the maximum lines, then iterate to find the maximum container