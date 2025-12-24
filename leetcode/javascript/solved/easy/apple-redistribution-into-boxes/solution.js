// https://leetcode.com/problems/apple-redistribution-into-boxes
// #Leetcode 3075
// 12/24/2025

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
const _minimumBoxes = (apple, capacity) => {
	capacity.sort((a, b) => b - a);
	let capacityIdx = 0;
	let applesReduced = apple.reduce((total, app) => {
		total = total + app;
		return total;
	}, 0);

	while (applesReduced > 0) {
		applesReduced -= capacity[capacityIdx];
		capacityIdx += 1;
	}

	return capacityIdx;
};
