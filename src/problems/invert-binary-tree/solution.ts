import type { TreeNode } from "../../types";

// const solution = (root: TreeNode | null): TreeNode | null => {
//   if (!root) return null;

//   const switchNodes = (root: TreeNode | null): void => {
//     if (!root?.left && !root?.right) return;

//     const left = root.left;
//     const right = root.right;

//     root.left = right;
//     root.right = left;

//     switchNodes(root.left);
//     switchNodes(root.right);
//   };

//   switchNodes(root);
//   return root;
// };

const solution = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];

  solution(root.left);
  solution(root.right);

  return root;
};

export default solution;
