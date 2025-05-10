/**
 * Time = **`O(n log n)`**
 * Space = **`O(1)`** / **`O(n)`**
 */
const solution = (points: number[][]): number => {
  points.sort((a, b) => a[0]! - b[0]!);

  let result = 0;

  for (let i = 1; i < points.length; i++) {
    result = Math.max(Math.abs(points[i - 1]![0]! - points[i]![0]!), result);
  }

  return result;
};

export default solution;
