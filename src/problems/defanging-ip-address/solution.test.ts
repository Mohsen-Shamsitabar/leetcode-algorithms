import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("defanging-ip-address", () => {
  it("should return correct answer", () => {
    const [address, answer] = ["1.1.1.1", "1[.]1[.]1[.]1"];

    expect(solution(address)).toEqual(answer);
  });
});
