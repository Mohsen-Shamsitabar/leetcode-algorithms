import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("get-sneaky-numbers", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [0, 1, 1, 0],
      [0, 1]
    ];

    expect(solution(nums)).toContain(answer[0]);
    expect(solution(nums)).toContain(answer[1]);

    // === 2 === //

    [nums, answer] = [
      [0, 3, 2, 1, 3, 2],
      [2, 3]
    ];

    expect(solution(nums)).toContain(answer[0]);
    expect(solution(nums)).toContain(answer[1]);

    // === 3 === //

    [nums, answer] = [
      [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2],
      [4, 5]
    ];

    expect(solution(nums)).toContain(answer[0]);
    expect(solution(nums)).toContain(answer[1]);
  });
});
