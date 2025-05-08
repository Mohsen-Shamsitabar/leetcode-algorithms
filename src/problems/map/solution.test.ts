import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("map", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [arr, fn, answer] = [
      [1, 2, 3],
      (n: number, _i: number) => n + 1,
      [2, 3, 4]
    ];

    expect(solution(arr, fn)).toEqual(answer);

    // === 2 === //

    [arr, fn, answer] = [[1, 2, 3], (n: number, i: number) => n + i, [1, 3, 5]];

    expect(solution(arr, fn)).toEqual(answer);

    // === 3 === //

    [arr, fn, answer] = [
      [10, 20, 30],
      (_n: number, _i: number) => 42,
      [42, 42, 42]
    ];

    expect(solution(arr, fn)).toEqual(answer);
  });
});
