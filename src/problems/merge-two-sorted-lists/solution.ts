import type { ListNode } from "../../types";

const solution = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = solution(list1.next, list2);
    return list1;
  }

  list2.next = solution(list1, list2.next);
  return list2;
};

export default solution;
