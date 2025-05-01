import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("construct-maximum-binary-tree", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer]: [number[], TreeNode] = [
      [3, 2, 1, 6, 0, 5],
      {
        val: 6,
        left: {
          val: 3,
          left: null,
          right: {
            val: 2,
            left: null,
            right: {
              val: 1,
              left: null,
              right: null
            }
          }
        },
        right: {
          val: 5,
          left: {
            val: 0,
            left: null,
            right: null
          },
          right: null
        }
      }
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [
      [3, 2, 1],
      {
        val: 3,
        left: null,
        right: {
          val: 2,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null
          }
        }
      }
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
