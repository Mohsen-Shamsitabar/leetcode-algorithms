import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-disappeared-numbers", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [4, 3, 2, 7, 8, 2, 3, 1],
      [5, 6]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [[1, 1], [2]];

    expect(solution(nums)).toEqual(answer);

    // === 3 === //

    [nums, answer] = [
      [1, 3, 3, 2, 1],
      [4, 5]
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
