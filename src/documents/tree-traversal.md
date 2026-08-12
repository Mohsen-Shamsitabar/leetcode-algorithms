### Tree traversal:

Traversing a tree involves iterating over all nodes in some manner. Because from a given node there is more than one possible next node (it is not a linear data structure), then, assuming sequential computation (not parallel), some nodes must be deferred—stored in some way for later visiting. This is often done via a `stack (LIFO)` or `queue (FIFO)`. As a tree is a self-referential (recursively defined) data structure, traversal can be defined by `recursion` or, more subtly, `corecursion`, in a natural and clear fashion; in these cases the deferred nodes are stored implicitly in the `call stack`.

---

#### DFS

To traverse binary trees with depth-first search, perform the following operations at each node:

1. If the current node is empty then return.
2. Execute the following three operations in a certain order:

- - N: Visit the current node.
- - L: Recursively traverse the current node's left subtree.
- - R: Recursively traverse the current node's right subtree.

---

#### BFS

In breadth-first search (BFS) or level-order search, the search tree is broadened as much as possible before going to the next depth.

---

#### Pre-order (NLR)

1. Visit the current node.
2. Recursively traverse the current node's left subtree.
3. Recursively traverse the current node's right subtree.

> The pre-order traversal is a topologically sorted one, because a parent node is processed before any of its child nodes is done.

---

#### Post-order (LRN)

1. Recursively traverse the current node's left subtree.
2. Recursively traverse the current node's right subtree.
3. Visit the current node.

> Post-order traversal can be useful to get postfix expression of a binary expression tree.

---

#### In-order (LNR)

1. Recursively traverse the current node's left subtree.
2. Visit the current node.
3. Recursively traverse the current node's right subtree.

> In a binary search tree ordered such that in each node the key is greater than all keys in its left subtree and less than all keys in its right subtree, in-order traversal retrieves the keys in ascending sorted order.

---

### Morris Tree Traversal — The O(N) Time and O(1) Space Algorithm

> https://medium.com/@mssandeepkamath/morris-tree-traversal-the-o-n-time-and-o-1-space-algorithm-5d2d2d47814a

#### Morris in-order traversal using threading:

A binary tree is threaded by making every left child pointer (that would otherwise be null) point to the in-order predecessor of the node (if it exists) and every right child pointer (that would otherwise be null) point to the in-order successor of the node (if it exists).

##### Advantages:

1. Avoids recursion, which uses a call stack and consumes memory and time.
2. The node keeps a record of its parent.

##### Disadvantages:

1. The tree is more complex.
2. We can make only one traversal at a time.
3. It is more prone to errors when both the children are not present and both values of nodes point to their ancestors.

##### Morris traversal is an implementation of in-order traversal that uses threading:

1. Create links to the in-order successor.
2. Print the data using these links.
3. Revert the changes to restore original tree.
