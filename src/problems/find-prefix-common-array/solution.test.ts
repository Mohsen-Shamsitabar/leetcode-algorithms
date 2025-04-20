import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-prefix-common-array", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [A, B, answer] = [
      [1, 3, 2, 4],
      [3, 1, 2, 4],
      [0, 2, 3, 4]
    ];

    expect(solution(A, B)).toEqual(answer);

    // === 2 === //

    [A, B, answer] = [
      [2, 3, 1],
      [3, 1, 2],
      [0, 1, 3]
    ];

    expect(solution(A, B)).toEqual(answer);
  });
});
