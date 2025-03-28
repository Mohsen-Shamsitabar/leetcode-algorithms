import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("minimum-number-of-operations-to-move-all-balls-to-each-box", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [boxes, answer] = ["110", [1, 1, 3]];

    expect(solution(boxes)).toEqual(answer);

    // === 2 === //

    [boxes, answer] = ["001011", [11, 8, 5, 4, 3, 4]];

    expect(solution(boxes)).toEqual(answer);
  });
});
