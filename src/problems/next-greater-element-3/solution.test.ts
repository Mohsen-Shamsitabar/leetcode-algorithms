import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("next-greater-element-3", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let num = 12;
    let answer = 21;

    expect(solution(num)).toBe(answer);

    // === 2 === //

    num = 21;
    answer = -1;

    expect(solution(num)).toBe(answer);

    // === 3 === //

    num = 124651;
    answer = 125146;

    expect(solution(num)).toBe(answer);

    // === 4 === //

    num = 2147483486;
    answer = -1;

    expect(solution(num)).toBe(answer);
  });
});
