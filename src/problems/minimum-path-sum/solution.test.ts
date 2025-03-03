import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("minimum-path-sum", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let matrix: number[][] = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ];

    expect(solution(matrix)).toBe(7);

    // === 2 === //

    matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    expect(solution(matrix)).toBe(12);
  });
});
