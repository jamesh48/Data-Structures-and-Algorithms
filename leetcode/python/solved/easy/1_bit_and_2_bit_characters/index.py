class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        # Last character is always 0
        # O - boolean representing if last character must be a one-bit character "0"
        # I list "bits" "0", "10", "11"
        # C bits.length is at least 1 and <= 1000, every character is either 0 or 1
        # E - Only [0]
        # Hint: Keep track of where the next character starts. At the end, you want to know if you started on the last bit.
        # If current character is "0" and next character is "0", next character must be a single bit
        # If current character is "1" and next character is "0", this must be a two bit grouping
        # If current character is "0" and next character is "1", current character must be a single bit
        # If current character is "1" and next character is "1", this must be a two bit grouping
        # If at end of list, the current character will be "0"
        idx = 0
        while idx <= len(bits) - 1:
            if len(bits[idx:]) == 1:
                return True
            curr_char = bits[idx]
            next_char = bits[idx + 1]

            if curr_char == 1 and (next_char == 1 or next_char == 0):
                idx = idx + 1

            idx = idx + 1

        return False
