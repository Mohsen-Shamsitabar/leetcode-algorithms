import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("kids-with-candies", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [candies, extra, answer] = [
      [2, 3, 5, 1, 3],
      3,
      [true, true, true, false, true]
    ];

    expect(solution(candies, extra)).toEqual(answer);

    // === 2 === //

    [candies, extra, answer] = [
      [4, 2, 1, 1, 2],
      1,
      [true, false, false, false, false]
    ];

    expect(solution(candies, extra)).toEqual(answer);

    // === 3 === //

    [candies, extra, answer] = [[12, 1, 12], 10, [true, false, true]];

    expect(solution(candies, extra)).toEqual(answer);
  });
});
