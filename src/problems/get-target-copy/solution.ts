import type { TreeNode } from "../../types.ts";

/**
 * Time = Space = **`O(n)`**
 */
const solution = (
  original: TreeNode,
  cloned: TreeNode,
  target: TreeNode
): TreeNode => {
  // [originalNode, cloneNode]
  type StackItem = [TreeNode, TreeNode][];
  const stack: StackItem = [[original, cloned]];

  while (stack.length) {
    const [originalNode, cloneNode] = stack.pop()!;

    if (originalNode === target) return cloneNode;

    if (originalNode.left) {
      stack.push([originalNode.left, cloneNode.left!]);
    }

    if (originalNode.right) {
      stack.push([originalNode.right, cloneNode.right!]);
    }
  }

  return target;
};

export default solution;
