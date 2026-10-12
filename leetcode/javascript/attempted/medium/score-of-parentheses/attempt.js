/**
 * @param {string} s
 * @return {number}
 */
const _scoreOfParentheses = (s) => {
    const stack = [];
    let score = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            continue;
        }

        let x = 0;
        while (s[i] === ')') {
            stack.pop();
            if (stack.length === 0 && x > 1) {
                x += 2;
            } else {
                x++;
            }
            i++;
        }

        score = score + x;

    }
    return score;
}