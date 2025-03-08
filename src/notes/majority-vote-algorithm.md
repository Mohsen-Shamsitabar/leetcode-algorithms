# Boyer–Moore majority vote algorithm

The algorithm maintains in its local variables a sequence element and a counter, with the counter initially zero. It then processes the elements of the sequence, one at a time. When processing an element x, if the counter is zero, the algorithm stores x as its remembered sequence element and sets the counter to one. Otherwise, it compares x to the stored element and either increments the counter (if they are equal) or decrements the counter (otherwise). At the end of this process, if the sequence has a majority, it will be the element stored by the algorithm.

This can be expressed in pseudocode as the following steps:

- Initialize an element m and a counter c with c = 0
- For each element x of the input sequence:
- - If c = 0, then assign m = x and c = 1
- - else if m = x, then assign c = c + 1
- - else assign c = c − 1
- Return m

![img](https://upload.wikimedia.org/wikipedia/commons/c/c7/Boyer-Moore_MJRTY.svg)

Even when the input sequence has no majority, the algorithm will report one of the sequence elements as its result. However, it is possible to perform a second pass over the same input sequence in order to count the number of times the reported element occurs and determine whether it is actually a majority. This second pass is needed, as it is not possible for a sublinear-space algorithm to determine whether there exists a majority element in a single pass through the input.

### Analysis

- Time Complexity: **`O(n)`**
- Space Complexity: **`O(1)`**
