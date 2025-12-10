class Solution(object):
    def countPermutations(self, complexity):
        """
        :type complexity: List[int]
        :rtype: int
        """
        result = 1

        for idx in range(1, len(complexity)):
            if complexity[0] >= complexity[idx]:
                return 0
            else:
                result = (result * idx)  % 1000000007

        return result
