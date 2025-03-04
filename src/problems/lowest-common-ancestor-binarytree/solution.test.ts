import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("lowest-common-ancestor-binarytree", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let p: TreeNode = {
      val: 6,
      left: null,
      right: null
    };

    let q: TreeNode = {
      val: 4,
      left: null,
      right: null
    };

    let answer: TreeNode = {
      val: 5,
      left: p,
      right: {
        val: 2,
        left: {
          val: 7,
          left: null,
          right: null
        },
        right: q
      }
    };

    let root: TreeNode = {
      val: 3,
      left: answer,
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: {
          val: 8,
          left: null,
          right: null
        }
      }
    };

    expect(solution(root, p, q)).toEqual(answer);

    // === 2 === //

    p = {
      val: 7,
      left: null,
      right: null
    };

    q = {
      val: 8,
      left: null,
      right: null
    };

    root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: p,
          right: {
            val: 4,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: q
      }
    };

    answer = root;

    expect(solution(root, p, q)).toEqual(answer);
  });
});
