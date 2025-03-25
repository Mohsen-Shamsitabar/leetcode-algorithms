import type { ListNode } from "../../types.ts";
import getGCD from "../../utilities/get-greatest-common-divisor.ts";

const solution = (head: ListNode): ListNode => {
  const root = head;

  let firstNode = head;
  let secondNode = head.next;

  while (true) {
    if (!secondNode) return root;

    const gcd = getGCD(firstNode.val, secondNode.val);

    const newNode: ListNode = {
      val: gcd,
      next: secondNode
    };

    firstNode.next = newNode;

    // === update pointers === //

    firstNode = secondNode;
    secondNode = firstNode.next;
  }
};

export default solution;
