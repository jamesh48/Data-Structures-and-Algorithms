
# Leetcode #125
# https://leetcode.com/problems/valid-palindrome/description/

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        cleaned_str = ''.join(char.lower() for char in s if char.isalnum()).strip()
        ptr_a = 0
        ptr_b = len(cleaned_str) - 1
        mid_pt_idx = ptr_b / 2
        if cleaned_str:
            while ptr_b >= mid_pt_idx:
                if cleaned_str[ptr_a] != cleaned_str[ptr_b]:
                    return False
                    break
                ptr_b = ptr_b - 1
                ptr_a = ptr_a + 1
        return True