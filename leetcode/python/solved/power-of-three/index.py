# Leetcode #326
# Naive Solution
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 0 or not float(n).is_integer():
            return False
        if n == 1:
            return True

        return self.isPowerOfThree(n / 3)