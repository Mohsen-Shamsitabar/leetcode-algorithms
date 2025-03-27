import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("find-achievable-number", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [num, t, answer] = [4, 1, 6];

    expect(solution(num, t)).toBe(answer);

    // === 2 === //

    [num, t, answer] = [3, 2, 7];

    expect(solution(num, t)).toBe(answer);
  });
});
