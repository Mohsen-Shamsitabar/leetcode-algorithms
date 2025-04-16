import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("left-right-difference", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [10, 4, 8, 3],
      [15, 1, 11, 22]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [[1], [0]];

    expect(solution(nums)).toEqual(answer);
  });
});
