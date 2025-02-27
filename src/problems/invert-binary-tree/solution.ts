import type { TreeNode } from "../../types";

const _firstApproach = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  const switchNodes = (root: TreeNode | null): void => {
    if (!root?.left && !root?.right) return;

    const left = root.left;
    const right = root.right;

    root.left = right;
    root.right = left;

    switchNodes(root.left);
    switchNodes(root.right);
  };

  switchNodes(root);
  return root;
};

const secondApproach = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  secondApproach(root.left);
  secondApproach(root.right);

  return root;
};

export default secondApproach;
