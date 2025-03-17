import { describe, expect, it } from "vitest";
import solution from "./solution.ts";

describe("evaluate-division", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let eqs: [string, string][] = [
      ["a", "b"],
      ["b", "c"]
    ];

    let vals: number[] = [2.0, 3.0];
    let queries: [string, string][] = [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"]
    ];

    let answer: number[] = [6.0, 0.5, -1.0, 1.0, -1.0];

    expect(solution(eqs, vals, queries)).toEqual(answer);

    // === 2 === //

    eqs = [
      ["a", "b"],
      ["b", "c"],
      ["bc", "cd"]
    ];
    vals = [1.5, 2.5, 5.0];
    queries = [
      ["a", "c"],
      ["c", "b"],
      ["bc", "cd"],
      ["cd", "bc"]
    ];
    answer = [3.75, 0.4, 5.0, 0.2];

    expect(solution(eqs, vals, queries)).toEqual(answer);

    // === 3 === //

    eqs = [["a", "b"]];
    vals = [0.5];
    queries = [
      ["a", "b"],
      ["b", "a"],
      ["a", "c"],
      ["x", "y"]
    ];
    answer = [0.5, 2.0, -1.0, -1.0];

    expect(solution(eqs, vals, queries)).toEqual(answer);

    // === 4 === //

    eqs = [
      ["a", "b"],
      ["a", "c"],
      ["d", "e"],
      ["d", "f"],
      ["a", "d"],
      ["aa", "bb"],
      ["aa", "cc"],
      ["dd", "ee"],
      ["dd", "ff"],
      ["aa", "dd"],
      ["a", "aa"]
    ];
    vals = [2.0, 3.0, 4.0, 5.0, 7.0, 5.0, 8.0, 9.0, 3.0, 2.0, 2.0];
    queries = [["ff", "a"]];
    answer = [0.08333333333333333];

    expect(solution(eqs, vals, queries)).toEqual(answer);
  });
});
