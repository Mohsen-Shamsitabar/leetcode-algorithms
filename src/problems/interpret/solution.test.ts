import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("interpret", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let [command, answer] = ["G()(al)", "Goal"];

    expect(solution(command)).toBe(answer);

    // === 2 === //

    [command, answer] = ["G()()()()(al)", "Gooooal"];

    expect(solution(command)).toBe(answer);

    // === 3 === //

    [command, answer] = ["(al)G(al)()()G", "alGalooG"];

    expect(solution(command)).toBe(answer);
  });
});
