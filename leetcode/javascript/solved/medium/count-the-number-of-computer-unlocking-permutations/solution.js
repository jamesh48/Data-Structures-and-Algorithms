// Leetcode #3577 -  Solved with hints on 12/10/25
// https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/description

/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function (complexity) {
    let result = 1

    for (let i = 1; i < complexity.length; i++) {
        if (complexity[0] >= complexity[i]) {
            return 0
        } else if (i >= 2) {
            result = (result * i) % 1000000007
        }
    }
    return result
};