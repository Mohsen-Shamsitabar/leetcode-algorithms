import type { TreeNode } from "../../types";

const mergeTrees = (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null => {
  if (!root1 && !root2) return null;
  if (!root1 && root2) return root2;
  if (!root2 && root1) return root1;

  const newNode: TreeNode = {
    val: root1!.val + root2!.val,
    left: mergeTrees(root1!.left, root2!.left),
    right: mergeTrees(root1!.right, root2!.right)
  };

  return newNode;
};

export default mergeTrees;
