// Leetcode 3075
// https://leetcode.com/problems/maximize-happiness-of-selected-children

// First Successful Submission
// 2805ms / 74.4 mb
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
const _maximumHappinessSum = (happiness, k) => {
	const deducted = happiness.sort((a, b) => b - a).slice(0, k);
	let score = 0;
	let decrement = 0;
	while (k > 0) {
		const firstVal = deducted.shift();
		if (firstVal - decrement > -1) {
			score += firstVal - decrement;
		} else {
			return score;
		}
		k--;
		decrement++;
	}

	return score;
};

// Using JS HOF- (faster) 234ms / 76.66 MB

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
const __maximumHappinessSum = (happiness, k) => {
	return happiness
		.sort((a, b) => b - a)
		.slice(0, k)
		.reduce((score, value, idx) => {
			if (value - idx > -1) {
				score += value - idx;
			}
			return score;
		}, 0);
};
