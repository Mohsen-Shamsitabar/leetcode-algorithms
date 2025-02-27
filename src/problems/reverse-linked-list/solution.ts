import type { ListNode } from "../../types";

const reverseLinkedList = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const nextNode = curr.next;

    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};

// const reverseLinkedList = (head: ListNode | null): ListNode | null => {
//   if (!head) return head;

//   const reverse = (curr: ListNode, parent: ListNode | null): ListNode => {
//     const next = curr.next;

//     curr = { val: curr.val, next: parent };

//     if (!next) return curr;
//     return reverse(next, curr);
//   };

//   return reverse(head, null);
// };

export default reverseLinkedList;
