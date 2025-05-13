import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("number-of-pairs-I", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [nums1, nums2, k, answer] = [[1, 3, 4], [1, 3, 4], 1, 5];

    expect(solution(nums1, nums2, k)).toBe(answer);

    // === 2 === //

    [nums1, nums2, k, answer] = [[1, 2, 4, 12], [2, 4], 3, 2];

    expect(solution(nums1, nums2, k)).toBe(answer);
  });
});
