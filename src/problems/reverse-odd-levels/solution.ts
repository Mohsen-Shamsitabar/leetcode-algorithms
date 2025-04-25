import type { TreeNode } from "../../types.ts";

/**
 * Time = **`O(n)`**
 * Space = **`O(h)`**
 */
const solution = (root: TreeNode): TreeNode => {
  if (!root.left || !root.right) return root;

  // [node, level]
  type StackValue = [TreeNode, number];

  const leftStack: StackValue[] = [[root.left, 1]];
  const rightStack: StackValue[] = [[root.right, 1]];

  const isLevelValid = (l1: number, l2: number) => l1 === l2 && l1 % 2 !== 0;

  while (leftStack.length !== 0 && rightStack.length !== 0) {
    const [leftNode, leftLevel] = leftStack.pop()!;
    const [rightNode, rightLevel] = rightStack.pop()!;

    if (isLevelValid(leftLevel, rightLevel)) {
      [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val];
    }

    if (leftNode.left && leftNode.right) {
      leftStack.push([leftNode.right, leftLevel + 1]);
      leftStack.push([leftNode.left, leftLevel + 1]);
    }

    if (rightNode.left && rightNode.right) {
      rightStack.push([rightNode.left, rightLevel + 1]);
      rightStack.push([rightNode.right, rightLevel + 1]);
    }
  }

  return root;
};

export default solution;
