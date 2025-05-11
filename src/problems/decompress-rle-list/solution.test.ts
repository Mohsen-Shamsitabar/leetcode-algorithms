import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("decompress-rle-list", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [
      [1, 2, 3, 4],
      [2, 4, 4, 4]
    ];

    expect(solution(nums)).toEqual(answer);

    // === 2 === //

    [nums, answer] = [
      [1, 1, 2, 3],
      [1, 3, 3]
    ];

    expect(solution(nums)).toEqual(answer);
  });
});
