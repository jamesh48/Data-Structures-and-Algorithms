# Naive Approach - could be improved by working with numbers directly
class Solution:
    def isPalindrome(self, x: int) -> bool:
        str_representation = str(x)
        arr_representation = list(str_representation)
        ptr_a = 0
        ptr_b = len(arr_representation) - 1
        mid_pt_idx = ptr_b / 2
        result = True
        while ptr_b >= mid_pt_idx:
            if arr_representation[ptr_a] != arr_representation[ptr_b]:
                result = False
                break

            ptr_b = ptr_b - 1
            ptr_a = ptr_a + 1

        return result
