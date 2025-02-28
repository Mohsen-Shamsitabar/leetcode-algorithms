import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("sort-colors", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let node: TreeNode = {
      val: 1,
      left: null,
      right: {
        val: 1,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 1,
          left: {
            val: 1,
            left: null,
            right: {
              val: 1,
              left: null,
              right: {
                val: 1,
                left: null,
                right: null
              }
            }
          },
          right: {
            val: 1,
            left: null,
            right: null
          }
        }
      }
    };

    expect(solution(node)).toEqual(3);

    // === 2 === //

    node = {
      val: 1,
      left: {
        val: 1,
        left: null,
        right: {
          val: 1,
          left: {
            val: 1,
            left: null,
            right: {
              val: 1,
              left: null,
              right: null
            }
          },
          right: {
            val: 1,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    };

    expect(solution(node)).toEqual(4);
  });
});
