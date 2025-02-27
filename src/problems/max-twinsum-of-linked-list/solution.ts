import type { ListNode } from "../../types";

const solution = (head: ListNode | null): number => {
  const values: ListNode["val"][] = [];
  let result = -Infinity;

  const traverse = (head: ListNode | null) => {
    if (!head) return;
    values.push(head.val);

    if (!head.next) return;
    return traverse(head.next);
  };

  traverse(head);

  for (let i = 0; i < values.length / 2; i++) {
    const j = values.length - i - 1;

    const firstTwin = values[i]!;
    const secondTwin = values[j]!;

    const twinSum = firstTwin + secondTwin;

    if (twinSum > result) result = twinSum;
  }

  return result;
};

export default solution;
