import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("move-zeroes", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let nums: number[] = [0, 1, 0, 3, 12];
    let answer: number[] = [1, 3, 12, 0, 0];

    solution(nums);

    expect(nums).toEqual(answer);

    // === 2 === //

    nums = [0];
    answer = [0];

    solution(nums);

    expect(nums).toEqual(answer);

    // === 3 === //

    nums = [0, 1, 0, 0, 9, 0, 3];
    answer = [1, 9, 3, 0, 0, 0, 0];

    solution(nums);

    expect(nums).toEqual(answer);

    // === 4 === //

    nums = [1, 2, 0, 0, 9, 0, 3];
    answer = [1, 2, 9, 3, 0, 0, 0];

    solution(nums);

    expect(nums).toEqual(answer);
  });
});
