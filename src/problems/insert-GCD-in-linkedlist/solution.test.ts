import { describe, expect, it } from "vitest";
import type { ListNode } from "../../types.ts";
import solution from "./solution.ts";

describe("insert-GCD-in-linkedlist", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let head: ListNode = {
      val: 18,
      next: {
        val: 6,
        next: {
          val: 10,
          next: {
            val: 3,
            next: null
          }
        }
      }
    };

    let answer: ListNode = {
      val: 18,
      next: {
        val: 6,
        next: {
          val: 6,
          next: {
            val: 2,
            next: {
              val: 10,
              next: {
                val: 1,
                next: {
                  val: 3,
                  next: null
                }
              }
            }
          }
        }
      }
    };

    expect(solution(head)).toEqual(answer);

    // === 2 === //

    head = {
      val: 7,
      next: null
    };

    answer = {
      val: 7,
      next: null
    };

    expect(solution(head)).toEqual(answer);

    // === 3 === //

    head = {
      val: 20,
      next: {
        val: 10,
        next: null
      }
    };

    answer = {
      val: 20,
      next: {
        val: 10,
        next: {
          val: 10,
          next: null
        }
      }
    };

    expect(solution(head)).toEqual(answer);
  });
});
