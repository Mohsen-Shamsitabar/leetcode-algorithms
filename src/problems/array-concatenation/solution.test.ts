import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("array-concatenation", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let nums: number[] = [1, 2, 3];
    let answer: number[] = [1, 2, 3, 1, 2, 3];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    nums = [1, 2, 1];
    answer = [1, 2, 1, 1, 2, 1];

    expect(solution(nums)).toEqual(answer);
  });
});
