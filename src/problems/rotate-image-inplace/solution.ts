const rotate = (matrix: number[][]): void => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      // Transpose the matrix.
      const temp = matrix[i]![j]!;

      matrix[i]![j] = matrix[j]![i]!;
      matrix[j]![i] = temp;
    }
  }

  // Reverse each row.
  matrix.forEach(arr => arr.reverse());
  return;
};

export default rotate;
