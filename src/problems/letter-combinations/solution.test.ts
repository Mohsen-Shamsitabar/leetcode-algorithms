import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("letter-combinations", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let digits: string = "23";
    let answer: string[] = [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ];

    expect(solution(digits)).toEqual(answer);

    // === 2 === //

    digits = "";
    answer = [];

    expect(solution(digits)).toEqual(answer);

    // === 3 === //

    digits = "2";
    answer = ["a", "b", "c"];

    expect(solution(digits)).toEqual(answer);
  });
});
