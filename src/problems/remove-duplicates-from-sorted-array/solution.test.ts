import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("remove-duplicates-from-sorted-array", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums, answer] = [[1, 1, 2], 2];

    expect(solution(nums)).toBe(answer);

    // === 2 === //

    [nums, answer] = [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5];

    expect(solution(nums)).toBe(answer);
  });
});
