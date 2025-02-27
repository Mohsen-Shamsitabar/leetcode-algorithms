import type { ListNode } from "../../types";

/**
 * TIME = SPACE = **`O(N)`**
 */
const solution = (head: ListNode | null): ListNode | null => {
  if (!head) return head;

  const headsPair = head.next;

  if (!headsPair) return head;

  const nextPair = headsPair.next;

  headsPair.next = head;
  head.next = solution(nextPair);

  return headsPair;
};

export default solution;
