### Number of Good Pairs (easy)

> https://leetcode.com/problems/number-of-good-pairs/description/

Given an array of integers `nums`, return the number of **_good pairs_**.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

##### Example1:

> **Input:** nums = [1,2,3,1,1,3].
> **Output:** 4.
> **Explanation:** There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

##### Example2:

> **Input:** nums = [1,1,1,1].
> **Output:** 6.
> **Explanation:** Each pair in the array are good.

##### Example3:

> **Input:** nums = [1,2,3].
> **Output:** 0.

##### Constraints:

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
