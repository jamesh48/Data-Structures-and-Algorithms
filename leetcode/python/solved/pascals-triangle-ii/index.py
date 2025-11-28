# Leetcode #119
# Naive Approach
class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        result = [1]
        ctr = rowIndex

        def make_row(input_row):
            output_row = [1]
            for idx, num in enumerate(input_row):
                if idx == len(input_row) - 1:
                    output_row.append(1)
                else:
                    curr_calc = num + input_row[idx + 1]
                    output_row.append(curr_calc)
            return output_row

        while ctr != 0:
            result = make_row(result)
            ctr = ctr - 1
        return result
