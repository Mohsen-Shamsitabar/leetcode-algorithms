// Not my solution

/**
 * Time = **`O(n^3)`**
 * Space = **`O(n^2)`**
 */
const solution = (values: number[]): number => {
  const vertexCount = values.length;

  const minScore: number[][] = Array.from(
    { length: vertexCount },
    () => Array(vertexCount).fill(0) as number[]
  );

  for (let gap = 2; gap < vertexCount; gap++) {
    for (let start = 0; start + gap < vertexCount; start++) {
      const end = start + gap;
      let currentMinScore = 1 << 30;

      for (let mid = start + 1; mid < end; mid++) {
        const triangleScore =
          minScore[start]![mid]! +
          minScore[mid]![end]! +
          values[start]! * values[mid]! * values[end]!;

        if (triangleScore < currentMinScore) {
          currentMinScore = triangleScore;
        }
      }

      minScore[start]![end] = currentMinScore;
    }
  }

  return minScore[0]![vertexCount - 1]!;
};

export default solution;
