import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("top-k-frequent", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let nums: number[] = [1, 1, 1, 2, 2, 3];
    let k: number = 2;
    let answer: number[] = [1, 2];

    expect(solution(nums, k)).toEqual(answer);

    // === 2 === //

    nums = [1];
    k = 1;
    answer = [1];

    expect(solution(nums, k)).toEqual(answer);

    // === 3 === //

    nums = [1, 2];
    k = 2;
    answer = [1, 2];

    expect(solution(nums, k)).toEqual(answer);
  });
});
