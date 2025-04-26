/**
 * Time = Space = **`O(1)`**
 */
const solution = (edges: number[][]): number => {
  if (edges[0]![0] === edges[1]![0] || edges[0]![0] === edges[1]![1]) {
    return edges[0]![0]!;
  } else return edges[0]![1]!;
};

export default solution;
