import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("min-moves-to-seat", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [seats, students, answer] = [[3, 1, 5], [2, 7, 4], 4];

    expect(solution(seats, students)).toBe(answer);

    // === 2 === //

    [seats, students, answer] = [[4, 1, 5, 9], [1, 3, 2, 6], 7];

    expect(solution(seats, students)).toBe(answer);

    // === 3 === //

    [seats, students, answer] = [[2, 2, 6, 6], [1, 3, 2, 6], 4];

    expect(solution(seats, students)).toBe(answer);
  });
});
