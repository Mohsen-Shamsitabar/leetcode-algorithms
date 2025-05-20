/**
 * Time = **`O(n^2)`**
 * Space = **`O(n)`**
 */
const solution = (grid: number[][]): number => {
  let result = 0;

  const rowMaxArr: number[] = [];
  const colMaxArr: number[] = [];

  const maxElInRow = (row: number) => {
    return Math.max(...grid[row]!);
  };

  const maxElInCol = (col: number) => {
    const els: number[] = [];

    for (let i = 0; i < grid.length; i++) {
      els.push(grid[i]![col]!);
    }

    return Math.max(...els);
  };

  for (let i = 0; i < grid.length; i++) {
    rowMaxArr.push(maxElInRow(i));
    colMaxArr.push(maxElInCol(i));
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      const el = grid[row]![col]!;
      const maxCol = colMaxArr[col]!;
      const maxRow = rowMaxArr[row]!;
      const newHeight = Math.min(maxCol, maxRow);

      if (el >= newHeight) continue;

      result += newHeight - el;
    }
  }

  return result;
};

export default solution;
