/**
 * @param {number[]} nums
 * @return {number}
 */
const _sumOfSquares = (nums) => {
	const n = nums.length;

	return (
		nums.reduce((acc, item, i) => {
			if (n % (i + 1) === 0) {
				return acc + item * item;
			}
			return acc;
		}, 1) - 1
	);
};
