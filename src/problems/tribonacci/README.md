### N-th Tribonacci Number (medium)

> https://leetcode.com/problems/n-th-tribonacci-number/description/

The **Tribonacci sequence** `Tn` is defined as follows:

`T0 = 0`, `T1 = 1`, `T2 = 1`, and `T(n+3) = Tn + T(n+1) + T(n+2)` for `n >= 0`.

Given `n`, return _the value of `Tn`_.

##### Example1:

> **Input:** `n = 4`.
> **Output:** `4`.
> **Explanation:**
> T_3 = 0 + 1 + 1 = 2
> T_4 = 1 + 1 + 2 = 4

##### Example2:

> **Input:** `n = 25`.
> **Output:** `1389537`.

##### Constraints:

- `0 <= n <= 37`
- The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.
