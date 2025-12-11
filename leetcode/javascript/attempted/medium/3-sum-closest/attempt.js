/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const _threeSumClosest = (_nums, _target) => {
	// let min = Infinity

	// max = -4
	// ptrA = ptrA + 1
	// max = -1
	// if (max > target) passed = true
	// ptrB = nums.length - 1
	// Math.min(min, nums[ptrB])
	// min = 500
	// max = -4, min = 500
	// max = -1, min = 200
	// max = 1, min = 1
	// let seen = -Infinity
	// console.info(sorted.slice(0, 3))
	// console.info(sorted.slice(3, 6))
	let min = Infinity;
	for (let i = 0; i < sorted.length; i++) {
		const currResult = sorted.slice(i, i + 3);
		if (currResult.length === 3) {
			const minCandidate = currResult.reduce((acc, item) => acc + item, 0);
			min = Math.min(minCandidate, min);
		}
	}

	return min;
	// while (true) {
	//     // -Infinity, -4 -> -4
	//     // -4, -1 -> -1
	//     max = Math.max(max, sorted[ptrA])
	//     min = Math.min(min, sorted[ptrB])
	//     console.info(max, min)
	//     ptrB--
	//     ptrA++
	//     if (ptrB < ptrA) {
	//         console.info(ptrB, ptrA)
	//         break
	//     }
	// }
};

// -4, -1, 1, 2
// want to find the three numbers that are closest to the target
