import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("trapping-rain-water", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let arr: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    let answer: number = 6;

    expect(solution(arr)).toBe(answer);

    // === 2 === //

    arr = [4, 2, 0, 3, 2, 5];
    answer = 9;

    expect(solution(arr)).toBe(answer);

    // === 3 === //

    arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    answer = 0;

    expect(solution(arr)).toBe(answer);

    // === 4 === //

    arr = [2, 0, 2];
    answer = 2;

    expect(solution(arr)).toBe(answer);
  });
});
