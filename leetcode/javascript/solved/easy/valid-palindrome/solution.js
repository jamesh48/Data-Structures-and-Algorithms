/**
 * @param {string} s
 * @return {boolean}
 */
const _isPalindrome = (s) => {
	const cleanedStr = s
		.split("")
		.filter((char) => /[a-zA-Z0-9]/.test(char))
		.join("")
		.toLowerCase();

	let ptrA = 0;
	let ptrB = cleanedStr.length - 1;

	const midPtIdx = cleanedStr.length / 2;

	while (ptrB >= midPtIdx) {
		if (cleanedStr[ptrA] !== cleanedStr[ptrB]) {
			return false;
		}

		ptrA++;
		ptrB--;
	}

	return true;
};
