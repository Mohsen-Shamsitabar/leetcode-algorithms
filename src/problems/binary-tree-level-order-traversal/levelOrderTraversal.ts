import type { TreeNode } from "../../types";

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let stack: number[] = [];
  let counter = 1;

  const bfs = () => {
    if (!queue.length) return;

    const item = queue.shift()!;
    stack.push(item.val);
    counter--;

    if (counter === 0) {
      result.push(stack);
      stack = [];
    }

    let childCound = 0;

    if (item.left) {
      childCound++;
      queue.push(item.left);

      return;
    }

    if (item.right) {
      childCound++;
      queue.push(item.right);

      return;
    }

    console.log(childCound);

    bfs();
    bfs();

    return;
  };

  bfs();

  return result;
};

export default levelOrder;
