/**
 * Time = **`O(E + Q * V)`**
 * Space = **`O(V + E)`**
 * @description
 * `E` is the number of `equations`.
 * `V` is the number of `variables`.
 * `Q` is the number of `queries`.
 */
const solution = (
  equations: [string, string][],
  values: number[],
  queries: [string, string][]
): number[] => {
  const buildGraph = () => {
    const graph = new Map<string, Map<string, number>>();

    equations.forEach(([firstVar, secondVar], idx) => {
      if (!graph.has(firstVar)) {
        graph.set(firstVar, new Map<string, number>());
      }

      graph.get(firstVar)!.set(secondVar, values[idx]!);

      if (!graph.has(secondVar)) {
        graph.set(secondVar, new Map<string, number>());
      }

      graph.get(secondVar)!.set(firstVar, 1 / values[idx]!);
    });

    return graph;
  };

  const findPathWeight = (
    start: string,
    end: string,
    visited: Set<string>
  ): number => {
    if (!graph.has(start)) return -1;

    if (graph.get(start)!.has(end)) {
      return graph.get(start)!.get(end)!;
    }

    visited.add(start);

    for (const [variable, weight] of graph.get(start)!.entries()) {
      if (!visited.has(variable)) {
        const productWeight = findPathWeight(variable, end, visited);

        if (productWeight > 0) {
          return weight * productWeight;
        }
      }
    }

    return -1;
  };

  const graph = buildGraph();

  const result = new Array<number>(queries.length);

  queries.forEach(([firstVar, secondVar], idx) => {
    result[idx] = findPathWeight(firstVar, secondVar, new Set<string>());
  });

  return result;
};

export default solution;
