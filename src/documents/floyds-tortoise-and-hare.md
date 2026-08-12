### Floyd’s Cycle Finding Algorithm

> https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/
>
> https://cp-algorithms.com/others/tortoise_and_hare.html

![example image](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fpwel97dag1dw06w37krn.png)

**Floyd’s cycle finding algorithm** or **Hare-Tortoise algorithm** is a pointer algorithm that uses only two pointers, moving through the sequence at **different speeds**. This algorithm is used to find a **loop** in a **linked list**. It uses two pointers one moving twice as fast as the other one. The faster one is called the `fast` pointer and the other one is called the `slow` pointer.

The idea is to start with the two pointers `slow` and `fast`, both starting at the `head` of the linked list.

- While traversing the List:
  - **`slow`** pointer will move one step at a time.
  - **`fast`** pointer moves two steps at a time.
  - If there’s a **cycle**, the fast pointer will eventually catch up with the slow pointer within the cycle because it’s moving faster.
  - If there’s **no cycle**, the fast pointer will reach the end of the list (i.e., it will become **`NULL`**).
- When the slow and fast pointers meet, a **cycle** or **loop** exists.
