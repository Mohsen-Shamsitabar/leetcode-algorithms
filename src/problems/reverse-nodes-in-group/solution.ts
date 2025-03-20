import type { ListNode } from "../../types.ts";

/**
 * Time = Space = **`O(n)`**
 */
// const solution = (head: ListNode | null, k: number): ListNode | null => {
//   let curr: ListNode | null = head;
//   let count: number = 0;

//   while (curr !== null && count !== k) {
//     // find the k+1 node
//     curr = curr.next;
//     count++;
//   }

//   if (count === k) {
//     // if k+1 node is found
//     curr = solution(curr, k); // reverse list with k+1 node as head
//     // head - head-pointer to direct part,
//     // curr - head-pointer to reversed part;
//     while (count-- > 0) {
//       // reverse current k-group:
//       const tmp: ListNode | null = head!.next; // tmp - next head in direct part

//       head!.next = curr; // preappending "direct" head to the reversed list
//       curr = head; // move head of reversed part to a new node
//       head = tmp; // move "direct" head to the next node in direct part
//     }

//     head = curr;
//   }

//   return head;
// };

/**
 * Time = **`O(n)`**
 * Space = **`O(1)`**
 */
const solution = (head: ListNode | null, k: number): ListNode | null => {
  const dummy: ListNode = { val: 0, next: null };
  let jump: ListNode = dummy;
  let l: ListNode | null = head;
  let r: ListNode | null = head;

  while (true) {
    let count = 0;

    while (r && count < k) {
      // use r to locate the range
      r = r.next;
      count++;
    }

    if (count === k) {
      // if size k satisfied, reverse the inner linked list
      let pre: ListNode | null = r;
      let cur: ListNode | null = l;

      for (let i = 0; i < k; i++) {
        if (!cur) continue;
        const nextTemp = cur.next;

        cur.next = pre;
        pre = cur;
        cur = nextTemp; // standard reversing
      }

      jump.next = pre;
      jump = l!;
      l = r; // connect two k-groups
    } else {
      return dummy.next;
    }
  }
};

export default solution;
