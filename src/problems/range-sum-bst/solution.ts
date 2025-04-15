import type { TreeNode } from "../../types.ts";

const solution = (root: TreeNode, low: number, high: number): number => {
  let result = 0;

  const stack: TreeNode[] = [root];

  const isInRange = (num: number) => num >= low && num <= high;

  while (stack.length) {
    const node = stack.pop()!;

    const nodeValue = node.val;

    if (isInRange(nodeValue)) result += nodeValue;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
};

export default solution;
