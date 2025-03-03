/**
 * TIME = SPACE = **`O(N*M)`**.
 * @description
 * **`N`** = the number of columns in the grid.
 * **`M`** = the number of rows in the grid.
 */
const solution = (grid: number[][]): number => {
  const stack: [number, number][] = [[0, 0]];
  const rowCount = grid.length;
  const colCount = grid[0]!.length;
  const visited = new Set<string>();

  const checkNeighbors = (i: number, j: number) => {
    if (j < colCount - 1) stack.push([i, j + 1]);
    if (i < rowCount - 1) stack.push([i + 1, j]);

    return;
  };

  while (stack.length !== 0) {
    const [i, j] = stack.shift()!;
    const visitedFormat = `${i}-${j}`;

    if (visited.has(visitedFormat)) continue;
    visited.add(visitedFormat);

    if (i >= 1 && j >= 1) {
      grid[i]![j]! += Math.min(grid[i - 1]![j]!, grid[i]![j - 1]!);

      checkNeighbors(i, j);
      continue;
    }

    if (i >= 1 && j <= 0) {
      grid[i]![j]! += grid[i - 1]![j]!;

      checkNeighbors(i, j);
      continue;
    }

    if (j >= 1 && i <= 0) {
      grid[i]![j]! += grid[i]![j - 1]!;

      checkNeighbors(i, j);
      continue;
    }

    checkNeighbors(i, j);
  }

  return grid[rowCount - 1]![colCount - 1]!;
};

export default solution;
