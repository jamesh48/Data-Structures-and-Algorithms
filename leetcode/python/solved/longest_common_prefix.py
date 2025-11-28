
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """Inserts a word into the trie"""
        current_node = self.root
        for char in word:
            if char not in current_node.children:
                current_node.children[char] = TrieNode()
            current_node = current_node.children[char]
        current_node.is_end_of_word = True

    def find_common_prefix(self):
        current_node = self.root
        result = ""
        while len(current_node.children.keys()) == 1:
            nxt_char = list(current_node.children.keys())[0]
            result = result + nxt_char
            current_node = current_node.children[nxt_char]
        return result

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # 1 create Trie class and instantiate trie
        trie = Trie()

        # 2 insert each word into the trie
        for word in strs:
            if not word:
                return ""
            trie.insert(word)

        # Traverse the trie for the first instance where trie nodes diverge.
        result = trie.find_common_prefix()

        if len(result):
            # in the case of overlapping words take the shortest
            result = result[:len(min(strs, key=len))]
        return result



