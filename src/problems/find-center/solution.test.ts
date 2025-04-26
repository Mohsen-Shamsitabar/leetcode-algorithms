import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-center", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [edges, answer] = [
      [
        [1, 2],
        [2, 3],
        [4, 2]
      ],
      2
    ];

    expect(solution(edges)).toBe(answer);

    // === 2 === //

    [edges, answer] = [
      [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4]
      ],
      1
    ];

    expect(solution(edges)).toBe(answer);
  });
});
