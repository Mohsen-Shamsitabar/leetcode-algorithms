import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-permutation-difference", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [s, t, answer] = ["abcde", "edbac", 12];

    expect(solution(s, t)).toBe(answer);

    // === 2 === //

    [s, t, answer] = ["abc", "bac", 2];

    expect(solution(s, t)).toBe(answer);
  });
});
