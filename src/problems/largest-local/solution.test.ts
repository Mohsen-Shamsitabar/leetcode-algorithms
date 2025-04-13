import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("largest-local", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [grid, answer] = [
      [
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2]
      ],
      [
        [9, 9],
        [8, 6]
      ]
    ];

    expect(solution(grid)).toEqual(answer);

    // === 2 === //

    [grid, answer] = [
      [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ],
      [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ]
    ];

    expect(solution(grid)).toEqual(answer);
  });
});
