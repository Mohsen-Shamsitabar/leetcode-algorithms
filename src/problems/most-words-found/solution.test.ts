import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("most-words-found", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [sentences, answer] = [
      [
        "alice and bob love leetcode",
        "i think so too",
        "this is great thanks very much"
      ],
      6
    ];

    expect(solution(sentences)).toBe(answer);

    // === 2 === //

    [sentences, answer] = [
      ["please wait", "continue to fight", "continue to win"],
      3
    ];

    expect(solution(sentences)).toBe(answer);
  });
});
