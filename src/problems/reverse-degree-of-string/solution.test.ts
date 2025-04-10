import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("reverse-degree-of-string", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [string, answer] = ["abc", 148];

    expect(solution(string)).toBe(answer);

    // === 2 === //

    [string, answer] = ["zaza", 160];

    expect(solution(string)).toBe(answer);
  });
});
