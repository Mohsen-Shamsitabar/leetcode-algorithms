import type BinaryTreeNode from "../../data-structures/binary-tree-node.ts";

const bfs = <T>(root: BinaryTreeNode<T>): T[] => {
  if (!root.left && !root.right) return [root.value];

  const result: T[] = [];
  const queue: BinaryTreeNode<T>[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    result.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

export { bfs };
