// Leetcode 3531: Count Covered Buildings
// https://leetcode.com/problems/count-covered-buildings/

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var _countCoveredBuildings = (_n, buildings) => {
	const { xAxisBuildings, yAxisBuildings } = buildings.reduce(
		(acc, building) => {
			const [x, y] = building;
			if (!acc.xAxisBuildings[x]) {
				acc.xAxisBuildings[x] = [y];
			} else {
				acc.xAxisBuildings[x] = [...acc.xAxisBuildings[x], y];
			}

			if (!acc.yAxisBuildings[y]) {
				acc.yAxisBuildings[y] = [x];
			} else {
				acc.yAxisBuildings[y] = [...acc.yAxisBuildings[y], x];
			}
			return acc;
		},
		{ xAxisBuildings: {}, yAxisBuildings: {} },
	);

	for (key in xAxisBuildings) {
		xAxisBuildings[key].sort((a, b) => a - b);
	}

	for (key in yAxisBuildings) {
		yAxisBuildings[key].sort((a, b) => a - b);
	}

	let ct = 0;
	for (const [x, y] of buildings) {
		const xAbs = xAxisBuildings[x];
		const yAbs = yAxisBuildings[y];

		if (
			yAbs[0] < x &&
			yAbs[yAbs.length - 1] > x &&
			xAbs[0] < y &&
			xAbs[xAbs.length - 1] > y
		) {
			ct++;
		}
	}

	return ct;
};
