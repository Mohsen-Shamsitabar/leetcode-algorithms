import type { TreeNode } from "../../types.ts";

// type Direction = "left" | "right";

/**
 * TIME = SPACE = **`O(N)`**
 * @description **Time limit Exeeded!**
 */
// const solution = (root: TreeNode): number => {
//   let result = 0;

//   const traverse = (node: TreeNode, dir: Direction, count: number) => {
//     if (dir === "left") {
//       if (!node.left) {
//         // terminate this path.
//         result = Math.max(result, count);
//       } else {
//         // continue this path.
//         traverse(node.left, "right", count + 1);
//       }

//       // start a new path for adj node.
//       if (node.right) startTraverse(node.right);
//     } else {
//       if (!node.right) {
//         result = Math.max(result, count);
//       } else {
//         traverse(node.right, "left", count + 1);
//       }

//       if (node.left) startTraverse(node.left);
//     }
//   };

//   const startTraverse = (node: TreeNode) => {
//     traverse(node, "left", 0);
//     traverse(node, "right", 0);
//   };

//   startTraverse(root);

//   return result;
// };

/**
 * TIME = SPACE = **`O(N)`**
 */
const solution = (root: TreeNode): number => {
  let result = 0;

  const dfs = (node: TreeNode | null, goLeft: boolean, count: number) => {
    if (!node) return;

    result = Math.max(result, count);

    if (goLeft) {
      dfs(node.left, false, count + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.left, false, 1);
      dfs(node.right, true, count + 1);
    }
  };

  dfs(root, true, 0);

  return result;
};

export default solution;
