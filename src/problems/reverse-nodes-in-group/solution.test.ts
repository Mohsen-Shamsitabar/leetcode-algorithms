import { describe, expect, it } from "vitest";
import type { ListNode } from "../../types.ts";
import solution from "./solution.ts";

describe("reverse-nodes-in-k-group", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let mainNode: ListNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    };

    let answer: ListNode = {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    };

    expect(solution(mainNode, 3)).toEqual(answer);

    // === 2 === //

    mainNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    };

    answer = {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 4,
          next: {
            val: 3,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    };

    expect(solution(mainNode, 2)).toEqual(answer);

    // === 3 === //

    mainNode = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    };

    answer = {
      val: 5,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 1,
              next: null
            }
          }
        }
      }
    };

    expect(solution(mainNode, 5)).toEqual(answer);
  });
});
