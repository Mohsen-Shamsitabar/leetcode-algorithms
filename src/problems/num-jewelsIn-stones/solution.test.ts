import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("num-jewelsin-stones", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [jewels, stones, answer] = ["aA", "aAAbbbb", 3];

    expect(solution(jewels, stones)).toBe(answer);

    // === 1 === //

    [jewels, stones, answer] = ["z", "ZZ", 0];

    expect(solution(jewels, stones)).toBe(answer);
  });
});
