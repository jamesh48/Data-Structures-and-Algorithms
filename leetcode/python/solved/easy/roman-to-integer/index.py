# Naive Solution:
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = 0
        map = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }
        ct_map = {
            "I": 0,
            "IV": 0,
            "V": 0,
            "IX": 0,
            "X": 0,
            "XL": 0,
            "XC": 0,
            "L": 0,
            "CD": 0,
            "C": 0,
            "CM": 0,
            "D": 0,
            "M": 0
        }
        reversed = list(s[::-1])
        list_len = len(reversed)
        index = 0
        while index < list_len:
            print(index)
            curr_char = reversed[index]
            if index + 1 < list_len:
                next_char = reversed[index + 1]

                combo_char = str(next_char) + str(curr_char)
                if map[str(next_char)] < map[str(curr_char)]:
                    ct_map[combo_char] = ct_map[combo_char] + 1
                    index = index + 1
                else:
                    ct_map[curr_char] = ct_map[curr_char] + 1
            else:
                ct_map[curr_char] = ct_map[curr_char] + 1
            index = index + 1

        print(ct_map)
        # Total Count
        for key in ct_map:
            if ct_map[key] > 0:
                result = result + (map[key] * ct_map[key])

        return result

