import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("shuffle-2n-array", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, n, answer] = [[2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]];

    expect(solution(nums, n)).toEqual(answer);

    // === 2 === //

    [nums, n, answer] = [[1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]];

    expect(solution(nums, n)).toEqual(answer);
  });
});
