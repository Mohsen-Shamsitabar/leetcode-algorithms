import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("max-increase-keeping-skyline", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [grid, answer] = [
      [
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0]
      ],
      35
    ];

    expect(solution(grid)).toBe(answer);

    // === 2 === //

    [grid, answer] = [
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      0
    ];

    expect(solution(grid)).toBe(answer);
  });
});
