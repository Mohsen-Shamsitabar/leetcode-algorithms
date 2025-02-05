### Removing Stars From a String (medium)

> https://leetcode.com/problems/removing-stars-from-a-string/description/

You are given a string `s`, which contains stars `*`.

In one operation, you can:

- Choose a star in `s`.
- Remove the closest **non-star** character to its **left**, as well as remove the star itself.

Return _the string after **all** stars have been removed_.

##### Example1:

> **Input:** `s = "leet**cod*e"`.
> **Output:** `"lecoe"`.

##### Example2:

> **Input:** `s = "erase*****"`.
> **Output:** `""`.

##### Constraints:

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters and stars `*`.
- The operation above can be performed on `s`.
