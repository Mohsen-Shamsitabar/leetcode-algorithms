import type { TreeNode } from "../../types.ts";

type StackItem = [TreeNode, number];

const solution = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const levelMap = new Map<number, number>();
  const stack: StackItem[] = [[root, 0]];

  while (stack.length !== 0) {
    const [node, level] = stack.shift()!;

    levelMap.set(level, node.val);

    if (node.left) stack.push([node.left, level + 1]);
    if (node.right) stack.push([node.right, level + 1]);
  }

  return Array.from(levelMap.values());
};

export default solution;
