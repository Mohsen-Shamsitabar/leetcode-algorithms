import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("count-points", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [points, queries, answer] = [
      [
        [1, 3],
        [3, 3],
        [5, 3],
        [2, 2]
      ],
      [
        [2, 3, 1],
        [4, 3, 1],
        [1, 1, 2]
      ],
      [3, 2, 2]
    ];

    expect(solution(points, queries)).toEqual(answer);

    // === 1 === //

    [points, queries, answer] = [
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
      ],
      [
        [1, 2, 2],
        [2, 2, 2],
        [4, 3, 2],
        [4, 3, 3]
      ],
      [2, 3, 2, 4]
    ];

    expect(solution(points, queries)).toEqual(answer);
  });
});
