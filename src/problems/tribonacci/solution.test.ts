import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("trinonacci", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let n = 4;
    let answer = 4;

    expect(solution(n)).toBe(answer);

    // === 2 === //

    n = 25;
    answer = 1389537;

    expect(solution(n)).toBe(answer);

    // === 3 === //

    n = 1;
    answer = 1;

    expect(solution(n)).toBe(answer);
  });
});
