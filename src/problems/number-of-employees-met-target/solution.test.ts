import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("number-of-employees-met-target", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [hours, target, answer] = [[0, 1, 2, 3, 4], 2, 3];

    expect(solution(hours, target)).toBe(answer);

    // === 2 === //

    [hours, target, answer] = [[5, 1, 4, 2, 2], 6, 0];

    expect(solution(hours, target)).toBe(answer);
  });
});
