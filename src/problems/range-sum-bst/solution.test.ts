import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("range-sum-bst", () => {
  it("should return correct answer", () => {
    let root: TreeNode = {
      val: 10,
      left: {
        val: 5,
        left: { val: 3, left: null, right: null },
        right: { val: 7, left: null, right: null }
      },
      right: {
        val: 15,
        left: null,
        right: { val: 18, left: null, right: null }
      }
    };

    let low = 7;
    let high = 15;

    expect(solution(root, low, high)).toBe(32);

    root = {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3,
          left: { val: 1, left: null, right: null },
          right: null
        },
        right: {
          val: 7,
          left: { val: 6, left: null, right: null },
          right: null
        }
      },
      right: {
        val: 15,
        left: null,
        right: { val: 18, left: null, right: null }
      }
    };

    low = 6;
    high = 10;
    expect(solution(root, low, high)).toBe(23);
  });
});
