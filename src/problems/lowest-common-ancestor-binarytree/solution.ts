import type { TreeNode } from "../../types.ts";

/**
 * Time = Space = **`O(N)`**
 */
const solution = (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode => {
  const levelMap = new Map<number, TreeNode[]>();

  let qLevel = 0;
  let pLevel = 0;

  const buildLevelMap = (node: TreeNode, level: number) => {
    if (levelMap.has(level)) {
      levelMap.get(level)!.push(node);
    } else {
      levelMap.set(level, [node]);
    }

    if (node.left) buildLevelMap(node.left, level + 1);
    if (node.right) buildLevelMap(node.right, level + 1);

    if (node === q) {
      qLevel = level;
    } else if (node === p) {
      pLevel = level;
    }
  };

  buildLevelMap(root, 0);

  while (p !== q) {
    if (qLevel > pLevel) {
      qLevel--;

      const qParentNode = levelMap
        .get(qLevel)!
        .find(parentNode => parentNode.left === q || parentNode.right === q)!;

      q = qParentNode;
    } else if (qLevel < pLevel) {
      pLevel--;

      const pParentNode = levelMap
        .get(pLevel)!
        .find(parentNode => parentNode.left === p || parentNode.right === p)!;

      p = pParentNode;
    } else {
      qLevel--;

      const qParentNode = levelMap
        .get(qLevel)!
        .find(parentNode => parentNode.left === q || parentNode.right === q)!;

      q = qParentNode;

      // ===

      pLevel--;

      const pParentNode = levelMap
        .get(pLevel)!
        .find(parentNode => parentNode.left === p || parentNode.right === p)!;

      p = pParentNode;
    }
  }

  return p;
};

/**
 * Time = Space = **`O(N)`**
 */
// const solution = (
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null => {
//   if (root === null) return null;

//   if (root === p || root === q) return root;

//   const left: TreeNode | null = solution(root.left, p, q);
//   const right: TreeNode | null = solution(root.right, p, q);

//   if (left !== null && right !== null) return root;

//   return left || right;
// };

export default solution;
