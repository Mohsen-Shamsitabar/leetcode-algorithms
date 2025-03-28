import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("build-array-from-permutation", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [0, 2, 1, 5, 3, 4],
      [0, 1, 2, 4, 5, 3]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [
      [5, 0, 1, 2, 3, 4],
      [4, 5, 0, 1, 2, 3]
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
