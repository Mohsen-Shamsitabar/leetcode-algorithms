const solution = (grid: string[][]): number => {
  if (!grid.length) return 0;

  let result = 0;

  const dfsReplace = (row: number, col: number) => {
    grid[row]![col] = "0";

    // check left
    if (grid[row]![col - 1] === "1") {
      dfsReplace(row, col - 1);
    }

    // check top
    if (grid[row - 1] && grid[row - 1]![col] === "1") {
      dfsReplace(row - 1, col);
    }

    // check right
    if (grid[row]![col + 1] === "1") {
      dfsReplace(row, col + 1);
    }

    // check bottom
    if (grid[row + 1] && grid[row + 1]![col] === "1") {
      dfsReplace(row + 1, col);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0]!.length; col++) {
      if (grid[row]![col] === "1") {
        dfsReplace(row, col);
        result++;
      }
    }
  }

  return result;
};

export default solution;
