import type { TreeNode } from "../../types";

const solution = (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null => {
  if (!root1 && !root2) return null;
  if (!root1 && root2) return root2;
  if (!root2 && root1) return root1;

  const newNode: TreeNode = {
    val: root1!.val + root2!.val,
    left: solution(root1!.left, root2!.left),
    right: solution(root1!.right, root2!.right)
  };

  return newNode;
};

export default solution;
