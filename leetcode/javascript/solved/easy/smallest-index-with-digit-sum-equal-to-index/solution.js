/**
 * @param {number[]} nums
 * @return {number}
 */
const _smallestIndex = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const split = String(nums[i]).split('');
        if (split.reduce((acc, item) => Number(item) + acc, 0) === i) {
            return i;
        }
    }
    return -1;
};