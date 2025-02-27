import type { TreeNode } from "../../types";

const goodNodes = (root: TreeNode | null): number => {
  if (!root) return 0;

  let result = 0;
  const stack = [root];
  const dfsMax = (maxValue: number) => {
    const curr = stack.pop()!;

    if (curr.val >= maxValue) {
      result++;
      maxValue = curr.val;
    }

    if (curr.left) {
      stack.push(curr.left);
      dfsMax(maxValue);
    }

    if (curr.right) {
      stack.push(curr.right);
      dfsMax(maxValue);
    }
  };

  dfsMax(root.val);

  return result;
};

export default goodNodes;
