/**
 * Time = Space = **`O(n^2)`**
 */
const solution = (grid: number[][]): number[][] => {
  const n = grid.length;
  const result: number[][] = [];

  for (let i = 1; i < n - 1; ++i) {
    const tempRow: number[] = [];

    for (let j = 1; j < n - 1; ++j) {
      let temp = 0;

      for (let k = i - 1; k <= i + 1; ++k) {
        for (let l = j - 1; l <= j + 1; ++l) {
          temp = Math.max(temp, grid[k]![l]!);
        }
      }

      tempRow.push(temp);
    }

    result.push(tempRow);
  }

  return result;
};

export default solution;
