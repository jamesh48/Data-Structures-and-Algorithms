/**
 * @param {number[]} nums
 * @return {number}
 */
var _sumFourDivisors = (nums) => {
	const values = [];
	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		const squareRoot = Math.floor(Math.sqrt(value));
		const interimValues = [];
		for (let j = 1; j <= squareRoot; j++) {
			if (j !== value / j && Number.isInteger(value / j)) {
				interimValues.push(j, value / j);
			}
		}

		if (interimValues.length === 4) {
			values.push(...interimValues);
		}
	}
	return values.reduce((acc, item) => acc + item, 0);
};
