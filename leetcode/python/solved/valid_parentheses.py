class Solution:
    def isValid(self, s: str) -> bool:
        parens_stack = list()
        parens_map = {"}": "{", "]": "[", ")": "("}

        closing_brackets = parens_map.keys()
        opening_brackets = parens_map.values()

        parens = list(s)
        if len(parens) % 2 != 0:
            return False

        for paren in parens:
            if paren in opening_brackets:
                parens_stack.append(paren)

            elif paren in closing_brackets:
                # check if the corresponding opening bracket is at the top of the stack
                if len(parens_stack) and parens_stack[len(parens_stack) - 1] == parens_map.get(paren):
                    parens_stack.pop()
                else:
                    return False

        return not len(parens_stack)
