import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("max-consecutive-ones-3", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let arr: number[] = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    let k = 2;
    let answer = 6;

    expect(solution(arr, k)).toBe(answer);

    // === 2 === //

    arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    k = 3;
    answer = 10;

    expect(solution(arr, k)).toBe(answer);

    // === 3 === //

    arr = [0];
    k = 0;
    answer = 0;

    expect(solution(arr, k)).toBe(answer);

    // === 4 === //

    arr = [0];
    k = 1;
    answer = 1;

    expect(solution(arr, k)).toBe(answer);

    // === 5 === //

    arr = [0, 1, 1];
    k = 0;
    answer = 2;

    expect(solution(arr, k)).toBe(answer);
  });
});
