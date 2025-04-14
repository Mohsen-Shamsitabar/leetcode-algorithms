import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("count-pairs", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, target, answer] = [[-1, 1, 2, 3, 1], 2, 3];

    expect(solution(nums, target)).toBe(answer);

    // === 2 === //

    [nums, target, answer] = [[-6, 2, 5, -2, -7, -1, 3], -2, 10];

    expect(solution(nums, target)).toBe(answer);
  });
});
