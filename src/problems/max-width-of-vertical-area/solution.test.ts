import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("max-width-vertical-area", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [points, answer] = [
      [
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7]
      ],
      1
    ];

    expect(solution(points)).toBe(answer);

    // === 2 === //

    [points, answer] = [
      [
        [3, 1],
        [9, 0],
        [1, 0],
        [1, 4],
        [5, 3],
        [8, 8]
      ],
      3
    ];

    expect(solution(points)).toBe(answer);
  });
});
