import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-matrix", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [1, 3, 4, 1, 2, 3, 1],
      [[1, 3, 4, 2], [1, 3], [1]]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [[1, 2, 3, 4], [[1, 2, 3, 4]]];

    expect(solution(nums)).toEqual(answer);
  });
});
