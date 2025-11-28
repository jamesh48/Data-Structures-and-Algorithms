// Leetcode #6
// https://leetcode.com/problems/zigzag-conversion
// Tip from the discussion comments: Don't think too much, use a 2D array to generate the pattern first, and then join characters of each row. Sometimes naive version works best
// Took about 40 minutes

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    let tdArr = Array.from({ length: numRows }, () => []);
    let ptr = 0
    let bPtr = 0
    let rightDirection = false

    if (numRows === 1) {
        return s
    }

    while (ptr !== s.length) {
        if (bPtr === 0) {
            rightDirection = false
        } else if (bPtr === numRows - 1) {
            rightDirection = true
        }

        if (rightDirection === false) {
            tdArr[bPtr].push(s[ptr])
            bPtr++
        } else {
            tdArr[bPtr].push(s[ptr])
            bPtr--
        }
        ptr++
    }

    const result = tdArr.flat().join('')
    return result
};