import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("running-sum", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [1, 2, 3, 4],
      [1, 3, 6, 10]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [
      [1, 1, 1, 1, 1],
      [1, 2, 3, 4, 5]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 3 === //

    [nums, answer] = [
      [3, 1, 2, 10, 1],
      [3, 4, 6, 16, 17]
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
