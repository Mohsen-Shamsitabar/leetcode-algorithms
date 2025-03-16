import type { TreeNode } from "../../types.ts";

/**
 * Time = Space = **`O(n)`**
 */
// const solution = (root: TreeNode): number => {
//   let ans = 0;

//   const dfs = (node: TreeNode | null): number => {
//     if (node === null) {
//       return 0;
//     }

//     const left = dfs(node.left);
//     const right = dfs(node.right);

//     ans = Math.max(ans, left + right);

//     return Math.max(left, right) + 1;
//   };

//   dfs(root);
//   return ans;
// };

/**
 * Time = Space = **`O(n)`**
 */
const solution = (root: TreeNode | null): number => {
  if (root === null) {
    return 0;
  }

  let overallNodeMax = 0;
  const nodeStack: TreeNode[] = [root];
  const nodePathCountMap: Map<TreeNode, number> = new Map();

  while (nodeStack.length > 0) {
    const node = nodeStack[nodeStack.length - 1]!;

    if (node.left !== null && !nodePathCountMap.has(node.left)) {
      nodeStack.push(node.left);
    } else if (node.right !== null && !nodePathCountMap.has(node.right)) {
      nodeStack.push(node.right);
    } else {
      const rootNodeEndofPostOrder = nodeStack.pop()!;
      const leftMax = nodePathCountMap.get(rootNodeEndofPostOrder.left!) || 0;
      const rightMax = nodePathCountMap.get(rootNodeEndofPostOrder.right!) || 0;
      const nodeMax = 1 + Math.max(leftMax, rightMax);

      nodePathCountMap.set(rootNodeEndofPostOrder, nodeMax);
      overallNodeMax = Math.max(overallNodeMax, leftMax + rightMax);
    }
  }

  return overallNodeMax;
};

export default solution;
