import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("min-score-triangulation", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [values, answer] = [[1, 2, 3], 6];

    expect(solution(values)).toBe(answer);

    // === 2 === //

    [values, answer] = [[3, 7, 4, 5], 144];

    expect(solution(values)).toBe(answer);

    // === 3 === //

    [values, answer] = [[1, 3, 1, 4, 1, 5], 13];

    expect(solution(values)).toBe(answer);
  });
});
