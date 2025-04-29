import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("decode-message", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [key, message, answer] = [
      "the quick brown fox jumps over the lazy dog",
      "vkbs bs t suepuv",
      "this is a secret"
    ];

    expect(solution(key, message)).toBe(answer);

    // === 2 === //

    [key, message, answer] = [
      "eljuxhpwnyrdgtqkviszcfmabo",
      "zwx hnfx lqantp mnoeius ycgk vcnjrdb",
      "the five boxing wizards jump quickly"
    ];

    expect(solution(key, message)).toBe(answer);
  });
});
