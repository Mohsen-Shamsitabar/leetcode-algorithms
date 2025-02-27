import type { TreeNode } from "../../types";

/**
 * SPACE = **`O(N)`**
 * TIME = **`O(N)`**
 */
// const solution = (root: TreeNode | null): void => {
//   if (!root) return;

//   const queue: TreeNode[] = [];

//   const dfs = (node: TreeNode) => {
//     if (node.left && node.right) {
//       queue.push(node.right);
//       node.right = node.left;
//       node.left = null;
//       dfs(node.right);
//       return;
//     }

//     if (node.left && !node.right) {
//       node.right = node.left;
//       node.left = null;
//       dfs(node.right);
//       return;
//     }

//     if (!node.left && node.right) {
//       dfs(node.right);
//       return;
//     }

//     if (queue.length > 0) {
//       const storedNode = queue.pop()!;

//       node.right = storedNode;
//       dfs(storedNode);
//       return;
//     }

//     return;
//   };

//   dfs(root);
// };

/**
 * SPACE = **`O(1)`**
 * TIME = **`O(N)`**
 */
const solution = (root: TreeNode | null): void => {
  let cur = root;

  while (cur) {
    if (cur.left) {
      let prev = cur.left;

      while (prev.right) {
        prev = prev.right;
      }

      prev.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }

    cur = cur.right;
  }
};

export default solution;
