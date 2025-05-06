import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("get-target-copy", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let target: TreeNode = {
      val: 3,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: {
        val: 19,
        left: null,
        right: null
      }
    };

    let answer: TreeNode = {
      val: 3,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: {
        val: 19,
        left: null,
        right: null
      }
    };

    let root: TreeNode = {
      val: 7,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: target
    };

    let clone: TreeNode = {
      val: 7,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: answer
    };

    expect(solution(root, clone, target)).toBe(answer);

    // === 2 === //

    target = {
      val: 7,
      left: null,
      right: null
    };

    answer = {
      val: 7,
      left: null,
      right: null
    };

    root = target;

    clone = answer;

    expect(solution(root, clone, target)).toBe(answer);
  });
});
