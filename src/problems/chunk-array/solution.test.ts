import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("chunk-array", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [arr, size, answer] = [[1, 2, 3, 4, 5], 1, [[1], [2], [3], [4], [5]]];

    expect(solution(arr, size)).toEqual(answer);

    // === 2 === //

    [arr, size, answer] = [
      [1, 9, 6, 3, 2],
      3,
      [
        [1, 9, 6],
        [3, 2]
      ]
    ];

    expect(solution(arr, size)).toEqual(answer);

    // === 3 === //

    [arr, size, answer] = [[8, 5, 3, 2, 6], 6, [[8, 5, 3, 2, 6]]];

    expect(solution(arr, size)).toEqual(answer);

    // === 4 === //

    [arr, size, answer] = [[], 1, []];

    expect(solution(arr, size)).toEqual(answer);
  });
});
