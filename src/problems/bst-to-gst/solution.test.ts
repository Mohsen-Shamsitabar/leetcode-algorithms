import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("bst-to-gst", () => {
  it("should convert BST to GST for a simple tree", () => {
    const root = {
      val: 4,
      left: { val: 1, left: null, right: null },
      right: { val: 6, left: null, right: null }
    };

    const expected = {
      val: 10,
      left: { val: 11, left: null, right: null },
      right: { val: 6, left: null, right: null }
    };

    expect(solution(root)).toEqual(expected);
  });

  it("should handle a single-node tree", () => {
    const root = { val: 5, left: null, right: null };
    const expected = { val: 5, left: null, right: null };

    expect(solution(root)).toEqual(expected);
  });

  it("should convert BST to GST for a complex tree", () => {
    const root = {
      val: 4,
      left: {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: {
          val: 2,
          left: null,
          right: { val: 3, left: null, right: null }
        }
      },
      right: {
        val: 6,
        left: { val: 5, left: null, right: null },
        right: {
          val: 7,
          left: null,
          right: { val: 8, left: null, right: null }
        }
      }
    };

    const expected = {
      val: 30,
      left: {
        val: 36,
        left: { val: 36, left: null, right: null },
        right: {
          val: 35,
          left: null,
          right: { val: 33, left: null, right: null }
        }
      },
      right: {
        val: 21,
        left: { val: 26, left: null, right: null },
        right: {
          val: 15,
          left: null,
          right: { val: 8, left: null, right: null }
        }
      }
    };

    expect(solution(root)).toEqual(expected);
  });
});
