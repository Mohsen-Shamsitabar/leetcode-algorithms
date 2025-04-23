import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("balanced-string-split", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [s, answer] = ["RLRRLLRLRL", 4];

    expect(solution(s)).toBe(answer);

    // === 2 === //

    [s, answer] = ["RLRRRLLRLL", 2];

    expect(solution(s)).toBe(answer);

    // === 3 === //

    [s, answer] = ["LLLLRRRR", 1];

    expect(solution(s)).toBe(answer);
  });
});
