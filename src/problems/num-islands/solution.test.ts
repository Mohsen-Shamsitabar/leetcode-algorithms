import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("num-islands", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [grid, answer] = [
      [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
      ],
      1
    ];

    expect(solution(grid)).toBe(answer);

    // === 2 === //

    [grid, answer] = [
      [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
      ],
      3
    ];

    expect(solution(grid)).toBe(answer);
  });
});
