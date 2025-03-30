import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("convert-the-temperature", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [celsius, answer] = [36.5, [309.65, 97.7]];

    expect(solution(celsius)).toEqual(answer);

    // === 2 === //

    [celsius, answer] = [122.11, [395.26, 251.798]];

    expect(solution(celsius)).toEqual(answer);
  });
});
