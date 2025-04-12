import type { TreeNode } from "../../types.ts";

/**
 * Time = **`O(n + k^2)`**
 * Space = **`O(n)`**
 *
 * @description BruteForce approach!
 */
// const solution = (root: TreeNode): TreeNode => {
//   const stack: TreeNode[] = [root];
//   const valuesMap = new Map<number, number>();

//   while (stack.length) {
//     const node = stack.pop()!;
//     const nodeValue = node.val;

//     valuesMap.set(nodeValue, nodeValue);

//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }

//   const allKeys = Array.from(valuesMap.keys());

//   allKeys.forEach(firstKey => {
//     let summed = 0;

//     allKeys.forEach(secondKey => {
//       if (secondKey >= firstKey) summed += secondKey;
//     });

//     valuesMap.set(firstKey, summed);
//   });

//   stack.push(root);

//   while (stack.length) {
//     const node = stack.pop()!;

//     node.val = valuesMap.get(node.val)!;

//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }

//   return root;
// };

// class Solution {
//   public TreeNode bstToGst (TreeNode root) {
//       int sum = 0;
//       TreeNode cur = root;
//       Deque<TreeNode> stack = new ArrayDeque<>();
//       while (!stack.isEmpty() || cur != null) {
//           while (cur != null) {
//               stack.push(cur);
//               cur = cur.right;
//           }
//           cur = stack.pop();
//           cur.val += sum;
//           sum = cur.val;
//           cur = cur.left;
//       }
//       return root;
//   }
// }

/**
 * Time = **`O(n)`**
 * Space = **`O(h)`**
 *
 */
const solution = (root: TreeNode): TreeNode => {
  let sum = 0;
  let curr: TreeNode | null = root;

  const stack: TreeNode[] = [];

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      curr = curr.right;
    }

    curr = stack.pop()!;
    curr.val += sum;
    sum = curr.val;
    curr = curr.left;
  }

  return root;
};

export default solution;
