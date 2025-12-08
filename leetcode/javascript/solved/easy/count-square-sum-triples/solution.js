// leetcode #1925
// https://leetcode.com/problems/count-square-sum-triples/description/?envType=daily-question&envId=2025-12-08

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let ct = 0
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            const sqrt = Math.sqrt((a * a) + (b * b))

            if (Number.isInteger(sqrt) && sqrt <= n) {
                ct += 2
            }
        }
    }

    return ct;
};