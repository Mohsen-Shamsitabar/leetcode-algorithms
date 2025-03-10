# What is a Perfect Binary Tree?

> https://www.geeksforgeeks.org/perfect-binary-tree/

A **perfect binary tree** is a special type of binary tree in which all the leaf nodes are at the same depth, and all non-leaf nodes have two children. In simple terms, this means that all leaf nodes are at the maximum depth of the tree, and the tree is completely filled with no gaps.

The maximum number of nodes in a **perfect binary tree** is given by the formula `2^(d+1) – 1`, where `d` is the depth of the tree. This means that a **perfect binary tree** with a depth of `n` has `2^n` leaf nodes and a total of `2^(n+1) – 1` nodes.

**Perfect binary trees** have a number of useful properties that make them useful in various applications. For example, they are often used in the implementation of heap data structures, as well as in the construction of threaded binary trees. They are also used in the implementation of algorithms such as heapsort and merge sort.

In other words, it can be said that each level of the tree is completely filled by the nodes.

### Examples of Perfect Binary Tree:

> **Perfect binary tree with 3 levels:**
>
> ![example-1](https://media.geeksforgeeks.org/wp-content/uploads/20220630154756/img2.jpg)

> **Perfect binary tree with 1 level:**
>
> ![example-2](https://media.geeksforgeeks.org/wp-content/uploads/20220629183021/img1.jpg)

> **NOT a perfect binary tree:**
>
> ![example-3](https://media.geeksforgeeks.org/wp-content/uploads/20220630155018/img3.jpg)
