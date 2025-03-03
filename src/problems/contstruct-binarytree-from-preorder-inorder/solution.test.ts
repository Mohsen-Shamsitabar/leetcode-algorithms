import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("construct-binarytree-from-preorder-inorder", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let preorder: number[] = [1, 2, 4, 8, 3, 5, 7, 6];
    let inorder: number[] = [4, 8, 2, 1, 7, 5, 3, 6];
    let answer: TreeNode | null = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: {
            val: 8,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        val: 3,
        left: {
          val: 5,
          left: {
            val: 7,
            left: null,
            right: null
          },
          right: null
        },
        right: {
          val: 6,
          left: null,
          right: null
        }
      }
    };

    expect(solution(preorder, inorder)).toEqual(answer);

    // === 2 === //

    preorder = [3, 9, 20, 15, 7];
    inorder = [9, 3, 15, 20, 7];
    answer = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null
        },
        right: {
          val: 7,
          left: null,
          right: null
        }
      }
    };

    expect(solution(preorder, inorder)).toEqual(answer);

    // === 3 === //

    preorder = [-1];
    inorder = [-1];
    answer = {
      val: -1,
      left: null,
      right: null
    };

    expect(solution(preorder, inorder)).toEqual(answer);
  });
});
