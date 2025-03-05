import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("binary-tree-right-side-view", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let root: TreeNode | null = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: {
            val: 6,
            left: null,
            right: null
          },
          right: {
            val: 5,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    };

    let answer: number[] = [1, 3, 4, 5];

    expect(solution(root)).toEqual(answer);

    // === 2 === //

    root = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null
        }
      },
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: null
        }
      }
    };

    answer = [1, 3, 4];

    expect(solution(root)).toEqual(answer);

    // === 3 === //

    root = null;

    answer = [];

    expect(solution(root)).toEqual(answer);
  });
});
