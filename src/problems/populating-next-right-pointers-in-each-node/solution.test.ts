import { describe, expect, it } from "vitest";
import type { _Node } from "../../types.ts";
import solution from "./solution.ts";

describe("populating-next-right-pointers-in-each-node", () => {
  it("should return correct answer", () => {
    // === 1 === //

    const node7: _Node = {
      val: 7,
      left: null,
      right: null,
      next: null
    };

    const node6: _Node = {
      val: 6,
      left: null,
      right: null,
      next: null
    };

    const node5: _Node = {
      val: 0,
      left: null,
      right: null,
      next: null
    };

    const node4: _Node = {
      val: 0,
      left: null,
      right: null,
      next: null
    };

    const node3: _Node = {
      val: 0,
      left: node6,
      right: node7,
      next: null
    };

    const node2: _Node = {
      val: 0,
      left: node4,
      right: node5,
      next: null
    };

    const node1: _Node = {
      val: 0,
      left: node2,
      right: node3,
      next: null
    };

    solution(node1);

    expect(node1.next).toEqual(null);
    expect(node2.next).toEqual(node3);
    expect(node3.next).toEqual(null);
    expect(node4.next).toEqual(node5);
    expect(node5.next).toEqual(node6);
    expect(node6.next).toEqual(node7);
    expect(node7.next).toEqual(null);

    // === 2 === //

    const root = null;

    expect(solution(root)).toBe(null);
  });
});
