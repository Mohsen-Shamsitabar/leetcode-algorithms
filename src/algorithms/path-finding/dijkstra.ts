// https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/

/**
 * [node, weight/distance]
 */
type UndirectedEdge = [number, number];
/**
 * The first node is the Src node (start node).
 */
type UndirectedAdjacencyList = UndirectedEdge[][];

/**
 * Time = **`O(V^2logV+E)`** (because of sorting, if we use a min-heap, we get better results)
 * Space = **`O(V+E)`**
 */
const dijkstra = (adjList: UndirectedAdjacencyList) => {
  const dist = new Array<number>(adjList.length).fill(Infinity);

  dist[0] = 0;

  const visited = new Set<number>();

  const priorityQueue: UndirectedEdge[] = [[0, 0]];

  while (priorityQueue.length) {
    priorityQueue.sort((a, b) => a[1] - b[1]);
    const [uNode, uDist] = priorityQueue.shift()!;

    if (visited.has(uNode)) continue;
    visited.add(uNode);

    for (const [vNode, weight] of adjList[uNode]!) {
      const newDist = uDist + weight;

      if (newDist < dist[vNode]!) {
        dist[vNode] = newDist;
        priorityQueue.push([vNode, newDist]);
      }
    }
  }

  return dist;
};

export { dijkstra, type UndirectedAdjacencyList };
