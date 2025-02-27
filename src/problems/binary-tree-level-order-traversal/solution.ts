import type { TreeNode } from "../../types";

/*
 *  My approach is NOT CORRECT!
 */
// const solution = (root: TreeNode | null): number[][] => {
//   if (!root) return [];

//   const result: number[][] = [];
//   const queue: TreeNode[] = [root];
//   let next = 0;
//   let curr = 1;

//   const bfs = () => {
//     const oldQueue = [...queue];

//     const item = queue.shift();

//     if (!item) return;

//     if (item.left) {
//       next++;
//       queue.push(item.left);
//     }

//     if (item.right) {
//       next++;
//       queue.push(item.right);
//     }

//     if (oldQueue.length === curr) {
//       const oldVals = oldQueue.map(node => node.val);

//       result.push(oldVals);
//       curr = next;
//       next = 0;
//       bfs();
//       bfs();
//       return;
//     }

//     curr = next;
//     bfs();
//     bfs();
//   };

//   bfs();

//   return result;
// };

const solution = (root: TreeNode | null): number[][] => {
  const hashMap = new Map<number, number[]>();

  const bfs = (tree: TreeNode | null, level: number) => {
    if (!tree) return;

    if (!hashMap.has(level)) {
      hashMap.set(level, [tree.val]);
    } else {
      hashMap.get(level)!.push(tree.val);
    }

    if (tree.left) {
      bfs(tree.left, level + 1);
    }

    if (tree.right) {
      bfs(tree.right, level + 1);
    }
  };

  bfs(root, 0);

  return Array.from(hashMap.values());
};

export default solution;
