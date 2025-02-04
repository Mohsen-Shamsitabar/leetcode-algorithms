import type { TreeNode } from "../../types";

const recursiveApproach = (root: TreeNode | null): number[] => {
  const result: number[] = [];

  const traverse = (root: TreeNode | null): number[] => {
    if (root) {
      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
    }

    return result;
  };

  return traverse(root);
};

const _iterativeApproach = (root: TreeNode | null): number[] => {
  const stack = [];
  const values = [];
  let current = root;

  while (current || stack.length !== 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    values.push(current.val);
    current = current.right;
  }
  return values;
};

export default recursiveApproach;
