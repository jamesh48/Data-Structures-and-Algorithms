/**
 * @param {string} s
 * @return {number}
 */
const _maxDepth = (s) => {
    const split = s.split('');

    const stack = [];

    let score = 0;

    for (let i = 0; i < split.length; i++) {
        if (split[i] === '(') {
            stack.push('(')
            continue;
        }
        if (split[i] === ')') {
            score = Math.max(stack.length, score);
            stack.pop();
        }
    }

    return score;
};