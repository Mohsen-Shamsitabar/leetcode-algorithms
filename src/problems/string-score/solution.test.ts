import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("string-score", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let string = "hello";
    let answer = 13;

    expect(solution(string)).toBe(answer);

    // === 2 === //

    string = "zaz";
    answer = 50;

    expect(solution(string)).toBe(answer);
  });
});
