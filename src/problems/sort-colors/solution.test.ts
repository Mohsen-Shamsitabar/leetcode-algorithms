import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("sort-colors", () => {
  it("should return correct answer", () => {
    let arr = [2, 1, 0];

    solution(arr);
    expect(arr).toEqual([0, 1, 2]);

    arr = [2, 0, 2, 1, 0, 1];
    solution(arr);
    expect(arr).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
