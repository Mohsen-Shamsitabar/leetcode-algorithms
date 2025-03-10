import type { _Node } from "../../types.ts";

type QueueItem = [_Node, number];

/**
 * Time = Space = **`O(n)`**
 */
// const solution = (root: _Node | null): _Node | null => {
//   if (!root) return root;
//   if (!root.right) return root;

//   const levelMap = new Map<number, _Node[]>();
//   const queue: QueueItem[] = [[root, 1]];

//   while (queue.length > 0) {
//     const [node, level] = queue.shift()!;

//     if (levelMap.has(level)) {
//       levelMap.get(level)!.push(node);
//     } else {
//       levelMap.set(level, [node]);
//     }

//     if (!node.left || !node.right) continue;

//     queue.push([node.left, level + 1]);
//     queue.push([node.right, level + 1]);
//   }

//   for (const [_, nodes] of levelMap.entries()) {
//     const nodesLength = nodes.length;

//     if (nodesLength === 1) continue;

//     for (let i = 1; i < nodesLength; i++) {
//       nodes[i - 1]!.next = nodes[i]!;
//     }
//   }

//   return root;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(n)`** excluding the `queue`.
 */
const solution = (root: _Node | null): _Node | null => {
  if (!root) return root;
  if (!root.right) return root;

  let currentLevel: number = 1;
  let lastRightNode: _Node | null = null;
  const queue: QueueItem[] = [[root, currentLevel]];

  while (queue.length > 0) {
    const [node, level] = queue.shift()!;

    if (level !== currentLevel) {
      currentLevel = level;
      lastRightNode = null;
    }

    if (!node.left || !node.right) continue;

    if (lastRightNode) {
      lastRightNode.next = node.left;
    }

    node.left.next = node.right;

    lastRightNode = node.right;

    queue.push([node.left, level + 1]);
    queue.push([node.right, level + 1]);
  }

  return root;
};

export default solution;
