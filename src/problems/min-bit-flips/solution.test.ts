import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("min-bit-flips", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [start, goal, answer] = [10, 7, 3];

    expect(solution(start, goal)).toBe(answer);

    // === 2 === //

    [start, goal, answer] = [3, 4, 3];

    expect(solution(start, goal)).toBe(answer);
  });
});
