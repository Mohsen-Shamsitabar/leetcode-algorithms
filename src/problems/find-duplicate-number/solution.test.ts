import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-duplicate-number", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let nums: number[] = [1, 3, 4, 2, 2];
    let answer: number = 2;

    expect(solution(nums)).toBe(answer);

    // === 2 === //

    nums = [3, 1, 3, 4, 2];
    answer = 3;

    expect(solution(nums)).toBe(answer);

    // === 3 === //

    nums = [3, 3, 3, 3, 3];
    answer = 3;

    expect(solution(nums)).toBe(answer);
  });
});
