
// Leetcode 3583 Count Special Triplets

// Test timed out because I didn't use frequency arrays
// Still managed to not completely brute force it
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
    let ct = 0

    for (let j = 1; j < nums.length - 1; j++) {
        let freqPrev = 0
        let freqNext = 0

        for (let i = 0; i < j; i++) {
            if (nums[i] === 2 * nums[j]) {
                freqPrev++
            }
        }

        for (let k = nums.length - 1; k > j; k--) {
            if (nums[j] * 2 === nums[k]) {
                freqNext++
            }

        }

        ct += freqPrev * freqNext
    }

    return ct % 1000000007
};

