import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("make-element-divisible-by-three", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [[1, 2, 3, 4], 3];

    expect(solution(nums)).toBe(answer);

    // === 2 === //

    [nums, answer] = [[3, 6, 9], 0];

    expect(solution(nums)).toBe(answer);
  });
});
