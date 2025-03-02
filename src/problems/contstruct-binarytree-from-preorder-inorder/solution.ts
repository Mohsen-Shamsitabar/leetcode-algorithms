import type { TreeNode } from "../../types.ts";

/**
 * Incomplete solution.
 */
// const solution = (preorder: number[], inorder: number[]): TreeNode | null => {
//   const visited = new Set<number>();
//   let root: TreeNode | null = null;
//   let node1: TreeNode | null = null;
//   let node2: TreeNode | null = null;
//   let lastAddedNode: TreeNode | null = null;
//   let flagged = false;

//   let [i, j] = [0, 0];

//   while (i < preorder.length) {
//     while (visited.has(inorder[j]!)) {
//       if (inorder[j]! === node1?.val) {
//         node2 = null;
//         flagged = false;
//       }

//       j++;
//     }

//     const preorderValue = preorder[i]!;
//     const inorderValue = inorder[j]!;

//     if (!root) {
//       const newNode: TreeNode = {
//         val: preorderValue,
//         left: null,
//         right: null
//       };

//       root = newNode;
//       node1 = newNode;
//       visited.add(preorderValue);
//       lastAddedNode = newNode;

//       i++;
//       continue;
//     }

//     if (i === preorder.length - 1) {
//       const newNode: TreeNode = {
//         val: preorderValue,
//         left: null,
//         right: null
//       };

//       node1!.right = newNode;

//       break;
//     }

//     if (preorderValue === inorderValue) {
//       node2 = lastAddedNode;

//       const newNode: TreeNode = {
//         val: preorderValue,
//         left: null,
//         right: null
//       };

//       if (flagged) {
//         node2!.right = newNode;
//       } else {
//         node2!.left = newNode;
//         flagged = true;
//       }

//       visited.add(preorderValue);
//       lastAddedNode = newNode;

//       i++;
//       j++;
//       continue;
//     }

//     if (!node2) {
//       const newNode: TreeNode = {
//         val: preorderValue,
//         left: null,
//         right: null
//       };

//       node1!.right = newNode;

//       node1 = newNode;

//       visited.add(preorderValue);
//       lastAddedNode = newNode;

//       i++;
//       continue;
//     }
//   }

//   return root;
// };

/**
 * SPACE = TIME = **`O(N)`**
 */
// const solution = (preorder: number[], inorder: number[]): TreeNode | null => {
//   let root: TreeNode | null = null;
//   let top: TreeNode | null = null;
//   let pop: TreeNode | null = null;
//   let i = 0;

//   for (const val of preorder) {
//     const node: TreeNode = {
//       val,
//       left: null,
//       right: null
//     };

//     if (pop) {
//       pop.right = node;
//       pop = null;
//     } else if (top) {
//       top.left = node;
//     } else {
//       root = node;
//     }

//     node.right = top;
//     top = node; // "push"
//     while (top && top.val === inorder[i]) {
//       pop = top;
//       top = pop.right;
//       pop.right = null; // "pop"
//       ++i;
//     }
//   }

//   return root;
// };

/**
 * SPACE = TIME = **`O(N)`**
 */
const solution = (preorder: number[], inorder: number[]): TreeNode | null => {
  const result: TreeNode = {
    val: preorder[0]!,
    left: null,
    right: null
  };

  let preorderInd = 1;
  let inorderInd = 0;

  const parents: TreeNode[] = [];
  let curr: TreeNode = result;

  while (preorderInd < preorder.length) {
    while (preorder[preorderInd - 1] !== inorder[inorderInd]) {
      parents.push(curr);

      curr.left = {
        val: preorder[preorderInd++]!,
        left: null,
        right: null
      };

      curr = curr.left;
    }

    inorderInd++;
    while (
      parents.length > 0 &&
      parents[parents.length - 1]!.val === inorder[inorderInd]
    ) {
      inorderInd++;
      curr = parents.pop()!;
    }

    if (preorderInd < preorder.length) {
      curr.right = {
        val: preorder[preorderInd++]!,
        left: null,
        right: null
      };

      curr = curr.right;
    }
  }

  return result;
};

export default solution;
