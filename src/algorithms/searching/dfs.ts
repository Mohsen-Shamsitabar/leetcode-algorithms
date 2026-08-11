import type BinaryTreeNode from "../../data-structures/binary-tree-node";

const iterativeDfs = <T>(root: BinaryTreeNode<T>): T[] => {
  if (!root.left && !root.right) return [root.value];

  const result: T[] = [];

  const stack: BinaryTreeNode<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;

    result.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

const recursiveDfs = <T>(root: BinaryTreeNode<T>): T[] => {
  if (!root.left && !root.right) return [root.value];

  const result: T[] = [];

  const traverse = (node: BinaryTreeNode<T>) => {
    result.push(node.value);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  return result;
};

export { iterativeDfs as dfs };
