### 1678. Goal Parser Interpretation (easy)

> https://leetcode.com/problems/goal-parser-interpretation/description/

You own a Goal Parser that can interpret a string `command`. The `command` consists of an alphabet of `"G"`, `"()"` and/or `"(al)"` in some order. The Goal Parser will interpret `"G"` as the string `"G"`, `"()"` as the string `"o"`, and `"(al)"` as the string `"al"`. The interpreted strings are then concatenated in the original order.

Given the string `command`, return _the Goal Parser's interpretation of `command`_.

##### Example1:

> **Input:** `command = "G()(al)"`.
> **Output:** `"Goal"`.
> **Explanation:** The Goal Parser interprets the command as follows:
> G -> G
> () -> o
> (al) -> al
> The final concatenated result is "Goal".

##### Example2:

> **Input:** `command = "G()()()()(al)"`.
> **Output:** `"Gooooal"`.

##### Example3:

> **Input:** `command = "(al)G(al)()()G"`.
> **Output:** `"alGalooG"`.

##### Constraints:

- `1 <= command.length <= 100`
- command consists of `"G"`, `"()"`, and/or `"(al)"` in some order.
