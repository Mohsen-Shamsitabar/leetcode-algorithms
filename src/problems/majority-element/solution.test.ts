import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("majority-element", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let nums: number[] = [3, 2, 3];

    let answer: number = 3;

    expect(solution(nums)).toBe(answer);

    // === 2 === //

    nums = [2, 2, 1, 1, 1, 2, 2];

    answer = 2;

    expect(solution(nums)).toBe(answer);
  });
});
