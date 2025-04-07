import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("convert-date-to-binary", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [date, answer] = ["2080-02-29", "100000100000-10-11101"];

    expect(solution(date)).toBe(answer);

    // === 2 === //

    [date, answer] = ["1900-01-01", "11101101100-1-1"];

    expect(solution(date)).toBe(answer);
  });
});
