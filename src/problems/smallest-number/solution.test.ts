import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("smallest-number", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [pattern, answer] = ["IIIDIDDD", "123549876"];

    expect(solution(pattern)).toBe(answer);

    // === 2 === //

    [pattern, answer] = ["DDD", "4321"];

    expect(solution(pattern)).toBe(answer);
  });
});
