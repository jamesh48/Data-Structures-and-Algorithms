/**
 * @param {string} s
 * @return {boolean}
 */
const _isValid = (s) => {
    const eqMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const closers = Object.keys(eqMap);
    const openers = Object.values(eqMap);

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openers.includes(s[i])) {
            stack.push(s[i])
            continue;
        }

        if (closers.includes(s[i])) {
            if (stack[stack.length - 1] === eqMap[s[i]]) {
                stack.pop()
                continue;
            }
        }

        return false;
    }

    return stack.length === 0
};