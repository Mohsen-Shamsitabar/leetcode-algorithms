### Convert Date to Binary (easy)

> https://leetcode.com/problems/convert-date-to-binary/

You are given a string `date` representing a Gregorian calendar date in the `yyyy-mm-dd` format.

`date` can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in `year-month-day` format.

Return _the binary representation of `date`_.

##### Example1:

> **Input:** `date = "2080-02-29"`.
> **Output:** `"100000100000-10-11101"`.
> **Explanation:**
> 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

##### Example2:

> **Input:** `date = "1900-01-01"`.
> **Output:** `"11101101100-1-1"`.

##### Constraints:

- `date.length == 10`
- `date[4] == date[7] == '-'`, and all other `date[i]`'s are digits.
- The input is generated such that `date` represents a valid Gregorian calendar date between Jan 1^st^, 1900 and Dec 31^st^, 2100 (both inclusive).
