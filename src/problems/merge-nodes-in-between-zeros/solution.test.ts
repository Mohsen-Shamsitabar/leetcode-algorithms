import { describe, expect, it } from "vitest";
import type { ListNode } from "../../types.ts";
import solution from "./solution.ts";

describe("merge-nodes-in-between-zeros", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let head: ListNode = {
      val: 0,
      next: {
        val: 3,
        next: {
          val: 1,
          next: {
            val: 0,
            next: {
              val: 4,
              next: {
                val: 5,
                next: {
                  val: 2,
                  next: {
                    val: 0,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    };

    let answer: ListNode = {
      val: 4,
      next: {
        val: 11,
        next: null
      }
    };

    expect(solution(head)).toEqual(answer);

    // === 2 === //

    head = {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 0,
          next: {
            val: 3,
            next: {
              val: 0,
              next: {
                val: 2,
                next: {
                  val: 2,
                  next: {
                    val: 0,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    };

    answer = {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    };

    expect(solution(head)).toEqual(answer);
  });
});
