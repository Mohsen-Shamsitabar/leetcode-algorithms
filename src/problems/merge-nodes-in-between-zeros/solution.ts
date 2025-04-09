import type { ListNode } from "../../types.ts";

/**
 * Time = Space = **`O(n)`**
 */
// const solution = (head: ListNode): ListNode | null => {
//   let result: ListNode | null = null;
//   let lastAddedNode: ListNode | null = null;

//   let summedValue = 0;
//   let currentNode: ListNode | null = head;

//   while (currentNode) {
//     const nodeValue: number = currentNode.val;
//     const nextNode: ListNode | null = currentNode.next;

//     currentNode = nextNode;

//     if (nodeValue === 0 && summedValue !== 0) {
//       const newNode: ListNode = {
//         val: summedValue,
//         next: null
//       };

//       summedValue = 0;

//       if (!result) {
//         result = newNode;
//         lastAddedNode = newNode;
//         continue;
//       }

//       if (lastAddedNode) {
//         lastAddedNode.next = newNode;
//         lastAddedNode = newNode;
//       }
//     } else {
//       summedValue += nodeValue;
//     }
//   }

//   return result;
// };

// === === === === ===

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (head: ListNode): ListNode | null => {
  let modify: ListNode | null = head.next;
  let nextSum: ListNode | null = modify;

  while (nextSum) {
    let sum = 0;

    // Find the sum of all nodes until you encounter a 0.
    while (nextSum!.val !== 0) {
      sum += nextSum!.val;
      nextSum = nextSum!.next;
    }

    // Assign the sum to the current node's value.
    modify!.val = sum;
    // Move nextSum to the first non-zero value of the next block.
    nextSum = nextSum!.next;
    // Move modify also to this node.
    modify!.next = nextSum;
    modify = modify!.next;
  }

  return head.next; // Skip the initial 0 node
};

export default solution;
