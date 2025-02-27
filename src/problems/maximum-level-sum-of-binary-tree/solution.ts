import type { TreeNode } from "../../types";

/**
 * TIME = **`O(N)`**
 * SPACE = **`O(N)`**
 */
const maxLevelSum = (root: TreeNode): number => {
  const levelMap = new Map<number, number>();

  const bfsWithLevel = (root: TreeNode, level: number) => {
    if (!levelMap.has(level)) {
      levelMap.set(level, root.val);
    } else {
      const currentVal = levelMap.get(level)!;

      levelMap.set(level, root.val + currentVal);
    }

    if (root.left) {
      bfsWithLevel(root.left, level + 1);
    }

    if (root.right) {
      bfsWithLevel(root.right, level + 1);
    }
  };

  bfsWithLevel(root, 1);

  // === === ===

  let result = 1;
  let maxVal = root.val;

  for (const pair of levelMap.entries()) {
    const [level, value] = pair;

    if (value > maxVal) {
      result = level;
      maxVal = value;
    }
  }

  return result;
};

export default maxLevelSum;
