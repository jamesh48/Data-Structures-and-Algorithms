# Naive Solution
class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        result = []
        for num1 in nums1:
            found_idx = nums2.index(num1) + 1
            test_nums = nums2[found_idx:]
            print(test_nums)
            if len(test_nums) == 0:
                result.append(-1)
            else:
                for test_idx, test_num in enumerate(test_nums):
                    if test_num > num1:
                        result.append(test_num)
                        break
                    elif test_idx == len(test_nums) - 1:
                        result.append(-1)
        return result
