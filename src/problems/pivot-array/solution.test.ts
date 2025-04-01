import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("pivot-array", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, pivot, answer] = [
      [9, 12, 5, 10, 14, 3, 10],
      10,
      [9, 5, 3, 10, 10, 12, 14]
    ];

    expect(solution(nums, pivot)).toEqual(answer);

    // === 2 === //

    [nums, pivot, answer] = [[-3, 4, 3, 2], 2, [-3, 2, 4, 3]];

    expect(solution(nums, pivot)).toEqual(answer);
  });
});
