import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("max-freq-sum", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [s, answer] = ["successes", 6];

    expect(solution(s)).toBe(answer);

    // === 2 === //

    [s, answer] = ["aeiaeia", 3];

    expect(solution(s)).toBe(answer);
  });
});
