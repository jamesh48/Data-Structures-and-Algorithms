class Solution(object):
    def kLengthApart(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        ct = None
        for idx in range(len(nums)):
            if nums[idx] == 1:
                if ct < k and ct != None:
                    return False
                ct = 0
            elif ct != None:
                ct = ct + 1
        return True