### 1221. Split a String in Balanced Strings (easy)

> https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

**Balanced** strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a **balanced** string `s`, split it into some number of substrings such that:

- Each substring is balanced.

Return _the **maximum** number of balanced strings you can obtain._

##### Example1:

> **Input:** `s = "RLRRLLRLRL"`.
> **Output:** `4`.
> **Explanation:** s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

##### Example2:

> **Input:** `s = "RLRRRLLRLL"`.
> **Output:** `2`.
> **Explanation:** s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
> Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

##### Example3:

> **Input:** `s = "LLLLRRRR"`.
> **Output:** `1`.
> **Explanation:** s can be split into "LLLLRRRR".

##### Constraints:

- `2 <= s.length <= 1000`
- `s[i]` is either `'L'` or `'R'`.
- `s` is a **balanced** string.
