import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("diameter-of-binary-tree", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let root: TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null
        },
        right: {
          val: 5,
          left: null,
          right: null
        }
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    };

    let answer = 3;

    expect(solution(root)).toBe(answer);

    // === 2 === //

    root = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: null
    };

    answer = 1;

    expect(solution(root)).toBe(answer);
  });
});
