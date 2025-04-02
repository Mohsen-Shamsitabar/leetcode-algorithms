import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("final-value-after-operations", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [opers, answer] = [["--X", "X++", "X++"], 1];

    expect(solution(opers)).toBe(answer);
    // === 2 === //

    [opers, answer] = [["++X", "++X", "X++"], 3];

    expect(solution(opers)).toBe(answer);

    // === 3 === //

    [opers, answer] = [["X++", "++X", "--X", "X--"], 0];

    expect(solution(opers)).toBe(answer);
  });
});
