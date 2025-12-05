const reducer = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

/**
 * @param {number[]} nums
 * @return {number}
 */
var _countPartitions = (nums) => {
	let evenPartitionCount = 0;

	for (let partition = 1; partition < nums.length; partition++) {
		const currentDiff =
			reducer(nums.slice(0, partition)) - reducer(nums.slice(partition));
		if (currentDiff % 2 === 0) {
			evenPartitionCount = evenPartitionCount + 1;
		}
	}

	return evenPartitionCount;
};
