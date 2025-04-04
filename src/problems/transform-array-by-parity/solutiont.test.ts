import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("transform-array-by-parity", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [4, 3, 2, 1],
      [0, 0, 1, 1]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [
      [4, 3, 2, 1],
      [0, 0, 1, 1]
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
