import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("truncate-sentence", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [s, k, answer] = [
      "Hello how are you Contestant",
      4,
      "Hello how are you"
    ];

    expect(solution(s, k)).toBe(answer);

    // === 2 === //

    [s, k, answer] = [
      "What is the solution to this problem",
      4,
      "What is the solution"
    ];

    expect(solution(s, k)).toBe(answer);

    // === 3 === //

    [s, k, answer] = ["chopper is not a tanuki", 5, "chopper is not a tanuki"];

    expect(solution(s, k)).toBe(answer);
  });
});
