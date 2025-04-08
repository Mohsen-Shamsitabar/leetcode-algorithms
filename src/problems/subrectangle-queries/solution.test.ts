import { describe, expect, it } from "vitest";
import SubrectangleQueries from "./solution.ts";

describe("subrectangle-queries", () => {
  it("should return correct answer", () => {
    const subrectQueries = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1]
    ]);

    const [test1, answer1] = [subrectQueries.getValue(0, 2), 1];

    subrectQueries.updateSubrectangle(0, 0, 3, 2, 5);

    const [test2, answer2] = [subrectQueries.getValue(0, 2), 5];
    const [test3, answer3] = [subrectQueries.getValue(3, 1), 5];

    subrectQueries.updateSubrectangle(3, 0, 3, 2, 10);

    const [test4, answer4] = [subrectQueries.getValue(3, 1), 10];
    const [test5, answer5] = [subrectQueries.getValue(0, 2), 5];

    expect([test1, test2, test3, test4, test5]).toEqual([
      answer1,
      answer2,
      answer3,
      answer4,
      answer5
    ]);
  });
});
