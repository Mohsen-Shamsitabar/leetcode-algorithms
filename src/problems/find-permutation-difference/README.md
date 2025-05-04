### 3146. Permutation Difference between Two Strings (easy)

> https://leetcode.com/problems/permutation-difference-between-two-strings/description/

You are given two strings `s` and `t` such that every character occurs at most once in `s` and `t` is a permutation of `s`.

The **permutation difference** between `s` and `t` is defined as the sum of the absolute difference between the index of the occurrence of each character in `s` and the index of the occurrence of the same character in `t`.

Return _the **permutation difference** between `s` and `t`_.

##### Example1:

> **Input:** `s = "abcde"`, `t = "edbac"`.
> **Output:** `12`.
> **Explanation:** The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

##### Example2:

> **Input:** `s = "abc"`, `t = "bac"`.
> **Output:** `2`.

##### Constraints:

- `1 <= s.length <= 26`
- Each character occurs at most once in `s`.
- `t` is a permutation of `s`.
- `s` consists only of lowercase English letters.
