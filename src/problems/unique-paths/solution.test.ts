import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("unique-paths", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [m, n] = [3, 7];
    let answer = 28;

    expect(solution(m, n)).toBe(answer);

    // === 2 === //

    [m, n] = [3, 2];
    answer = 3;

    expect(solution(m, n)).toBe(answer);

    // === 3 === //

    [m, n] = [23, 12];
    answer = 193536720;

    expect(solution(m, n)).toBe(answer);
  });
});
